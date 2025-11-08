// Exponential Growth Chart Component
// Interactive chart showing exponential growth with adjustable growth rate

class ExponentialGrowthChart {
    constructor(container) {
        this.container = container;
        this.chartId = `exp-growth-chart-${Date.now()}`;
        this.growthRate = 5.0; // Default 5% annual growth
        this.initialValue = 100; // Starting value (normalized to 100)
        this.years = 30; // Number of years to display
        this.plotlyChart = null;
        
        this.init();
    }

    /**
     * Initialize the chart component
     */
    init() {
        // Create the HTML structure
        this.createHTML();
        
        // Initialize the chart
        this.createChart();
        
        // Set up event listeners
        this.setupEventListeners();
    }

    /**
     * Create the HTML structure for the chart
     */
    createHTML() {
        this.container.innerHTML = `
            <div class="exponential-growth-container">
                <div class="exp-chart-controls">
                    <label for="${this.chartId}-slider" class="exp-chart-label">
                        Tasso di crescita annuo: <strong id="${this.chartId}-rate">5.0%</strong>
                    </label>
                    <input 
                        type="range" 
                        id="${this.chartId}-slider" 
                        class="exp-chart-slider"
                        min="1" 
                        max="10" 
                        step="0.1" 
                        value="5.0"
                    >
                </div>
                <div id="${this.chartId}-plot" class="exp-chart-plot"></div>
                <div class="exp-chart-info">
                    <div class="exp-doubling-time">
                        <span class="exp-info-label">Tempo di raddoppio:</span>
                        <span class="exp-info-value" id="${this.chartId}-doubling">~14.4 anni</span>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Create the Plotly chart
     */
    createChart() {
        const plotContainer = document.getElementById(`${this.chartId}-plot`);
        if (!plotContainer) return;

        // Wait for container to be properly sized
        setTimeout(() => {
            this.renderChart(plotContainer);
        }, 100);
    }

    /**
     * Render the actual Plotly chart
     */
    renderChart(plotContainer) {
        // Calculate data points
        const data = this.calculateGrowthData();
        
        // Get container width (with fallback)
        const containerWidth = Math.min(plotContainer.offsetWidth || 600, 650);
        
        // Create trace
        const trace = {
            x: data.years,
            y: data.values,
            type: 'scatter',
            mode: 'lines',
            name: 'Valore',
            line: {
                color: '#3498db',
                width: 3
            },
            hovertemplate: 'Anno: %{x}<br>Valore: %{y:.1f}<extra></extra>'
        };

        // Calculate doubling point
        const doublingTime = this.calculateDoublingTime();
        const doublingYear = Math.ceil(doublingTime);
        const doublingValue = this.initialValue * 2;

        // Add doubling point marker
        const doublingTrace = {
            x: [doublingYear],
            y: [doublingValue],
            type: 'scatter',
            mode: 'markers+text',
            name: 'Raddoppio',
            marker: {
                color: '#e74c3c',
                size: 12,
                symbol: 'diamond'
            },
            text: [`${doublingYear} anni`],
            textposition: 'top center',
            textfont: {
                size: 12,
                color: '#e74c3c'
            },
            hovertemplate: 'Raddoppio: %{x} anni<br>Valore: %{y:.1f}<extra></extra>'
        };

        // Layout configuration
        const layout = {
            width: containerWidth,
            height: 300,
            margin: { t: 20, r: 30, b: 50, l: 60 },
            xaxis: {
                title: 'Anni',
                titlefont: { size: 12 },
                tickfont: { size: 11 },
                gridcolor: '#e0e0e0',
                showgrid: true
            },
            yaxis: {
                title: 'Valore (base 100)',
                titlefont: { size: 12 },
                tickfont: { size: 11 },
                gridcolor: '#e0e0e0',
                showgrid: true
            },
            plot_bgcolor: 'rgba(0,0,0,0)',
            paper_bgcolor: 'rgba(0,0,0,0)',
            showlegend: false,
            hovermode: 'closest'
        };

        // Configuration
        const config = {
            responsive: true,
            displayModeBar: false,
            staticPlot: false
        };

        // Create the plot
        Plotly.newPlot(plotContainer, [trace, doublingTrace], layout, config)
            .then(() => {
                this.plotlyChart = plotContainer;
                // Resize chart to fit container
                Plotly.Plots.resize(plotContainer);
            });
    }

    /**
     * Calculate growth data points
     */
    calculateGrowthData() {
        const years = [];
        const values = [];
        
        for (let year = 0; year <= this.years; year++) {
            years.push(year);
            // Compound growth formula: V = P * (1 + r)^t
            const value = this.initialValue * Math.pow(1 + this.growthRate / 100, year);
            values.push(value);
        }
        
        return { years, values };
    }

    /**
     * Calculate doubling time using rule of 72
     * More accurate: ln(2) / ln(1 + r)
     */
    calculateDoublingTime() {
        // Using the more accurate formula: ln(2) / ln(1 + r/100)
        return Math.log(2) / Math.log(1 + this.growthRate / 100);
    }

    /**
     * Update the chart when slider changes
     */
    updateChart() {
        // Update rate display
        const rateDisplay = document.getElementById(`${this.chartId}-rate`);
        if (rateDisplay) {
            rateDisplay.textContent = `${this.growthRate.toFixed(1)}%`;
        }

        // Update doubling time
        const doublingTime = this.calculateDoublingTime();
        const doublingDisplay = document.getElementById(`${this.chartId}-doubling`);
        if (doublingDisplay) {
            doublingDisplay.textContent = `~${doublingTime.toFixed(1)} anni`;
        }

        // Recalculate data
        const data = this.calculateGrowthData();
        const doublingTimeYears = this.calculateDoublingTime();
        const doublingYear = Math.ceil(doublingTimeYears);
        const doublingValue = this.initialValue * 2;

        // Update the plot
        if (this.plotlyChart) {
            const update = {
                x: [data.years],
                y: [data.values]
            };
            
            const doublingUpdate = {
                x: [[doublingYear]],
                y: [[doublingValue]]
            };

            Plotly.update(this.plotlyChart, update, {}, [0])
                .then(() => {
                    return Plotly.update(this.plotlyChart, doublingUpdate, {}, [1]);
                });
        }
    }

    /**
     * Set up event listeners
     */
    setupEventListeners() {
        const slider = document.getElementById(`${this.chartId}-slider`);
        if (slider) {
            slider.addEventListener('input', (e) => {
                this.growthRate = parseFloat(e.target.value);
                this.updateChart();
            });
        }
    }

    /**
     * Clean up when component is removed
     */
    destroy() {
        if (this.plotlyChart) {
            Plotly.purge(this.plotlyChart);
        }
    }
}

// Export for use in other modules
window.ExponentialGrowthChart = ExponentialGrowthChart;

