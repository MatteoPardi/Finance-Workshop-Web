// Main Deck Initialization and Management
// Handles Reveal.js initialization and slide events

class FinanceDeck {
    constructor() {
        this.slideLoader = new SlideLoader();
        this.currentSlide = 0;
        this.totalSlides = 0;
        this.deck = null;
    }

    /**
     * Initialize the presentation deck
     */
    async init() {
        try {
            console.log('Initializing Finance Workshop Deck...');
            
            // Load all slides first
            await this.slideLoader.loadAllSlides();
            this.totalSlides = this.slideLoader.getSlideCount();
            
            // Initialize Reveal.js
            this.deck = new Reveal(window.REVEAL_CONFIG);
            await this.deck.initialize();
            
            // Set up event listeners
            this.setupEventListeners();
            
            console.log('Deck initialization complete!');
            console.log(`Total slides loaded: ${this.totalSlides}`);
            
        } catch (error) {
            console.error('Failed to initialize deck:', error);
            this.showInitializationError(error);
        }
    }

    /**
     * Set up event listeners for slide events
     */
    setupEventListeners() {
        // Slide change events
        this.deck.on('slidechanged', (event) => {
            this.onSlideChanged(event);
        });

        // Ready event
        this.deck.on('ready', (event) => {
            this.onDeckReady(event);
        });

        // Fragment events (for animated content)
        this.deck.on('fragmentshown', (event) => {
            this.onFragmentShown(event);
        });

        this.deck.on('fragmenthidden', (event) => {
            this.onFragmentHidden(event);
        });
    }

    /**
     * Handle slide change events
     */
    onSlideChanged(event) {
        this.currentSlide = event.indexh;
        console.log(`Slide changed to: ${this.currentSlide}`);
        
        // Initialize any slide-specific components
        this.initializeSlideComponents(event.currentSlide);
        
        // Update slide-specific styling
        this.updateSlideClasses(event.currentSlide);
    }

    /**
     * Handle deck ready event
     */
    onDeckReady(event) {
        console.log('Deck is ready!');
        
        // Initialize components for the first slide
        this.initializeSlideComponents(event.currentSlide);
        
        // Add any global event listeners
        this.setupGlobalListeners();
    }

    /**
     * Handle fragment shown events
     */
    onFragmentShown(event) {
        console.log('Fragment shown:', event.fragment);
        
        // Handle any fragment-specific animations or logic
        this.handleFragmentAnimation(event.fragment, 'show');
    }

    /**
     * Handle fragment hidden events
     */
    onFragmentHidden(event) {
        console.log('Fragment hidden:', event.fragment);
        
        // Handle any fragment-specific animations or logic
        this.handleFragmentAnimation(event.fragment, 'hide');
    }

    /**
     * Initialize slide-specific components (charts, animations, etc.)
     */
    initializeSlideComponents(slide) {
        if (!slide) return;
        
        // Look for chart containers and initialize them
        const chartContainers = slide.querySelectorAll('.chart-container');
        chartContainers.forEach(container => {
            this.initializeChart(container);
        });
        
        // Look for any custom interactive elements
        const interactiveElements = slide.querySelectorAll('[data-interactive]');
        interactiveElements.forEach(element => {
            this.initializeInteractiveElement(element);
        });
    }

    /**
     * Initialize charts using Plotly
     */
    initializeChart(container) {
        const chartType = container.getAttribute('data-chart-type');
        const chartData = container.getAttribute('data-chart-data');
        
        if (chartType && chartData) {
            console.log(`Initializing chart: ${chartType}`);
            
            try {
                // This will be expanded when we add specific chart implementations
                const data = JSON.parse(chartData);
                this.createChart(container, chartType, data);
            } catch (error) {
                console.error('Error initializing chart:', error);
                container.innerHTML = '<p>Errore nel caricamento del grafico</p>';
            }
        }
    }

    /**
     * Create a chart using Plotly
     */
    createChart(container, type, data) {
        // Basic chart creation - will be expanded based on needs
        const layout = {
            ...window.CHART_CONFIG,
            title: data.title || '',
            margin: { t: 50, l: 50, r: 50, b: 50 }
        };
        
        Plotly.newPlot(container, data.traces || [], layout);
    }

    /**
     * Initialize interactive elements
     */
    initializeInteractiveElement(element) {
        const interactiveType = element.getAttribute('data-interactive');
        console.log(`Initializing interactive element: ${interactiveType}`);
        
        // This will be expanded based on specific interactive needs
        switch (interactiveType) {
            case 'calculator':
                this.initializeCalculator(element);
                break;
            case 'quiz':
                this.initializeQuiz(element);
                break;
            default:
                console.log(`Unknown interactive type: ${interactiveType}`);
        }
    }

    /**
     * Initialize calculator components
     */
    initializeCalculator(element) {
        // Placeholder for calculator initialization
        console.log('Calculator component ready');
    }

    /**
     * Initialize quiz components
     */
    initializeQuiz(element) {
        // Placeholder for quiz initialization
        console.log('Quiz component ready');
    }

    /**
     * Handle fragment animations
     */
    handleFragmentAnimation(fragment, action) {
        const animationType = fragment.getAttribute('data-animation');
        
        if (animationType) {
            if (action === 'show') {
                fragment.classList.add(animationType);
            } else {
                fragment.classList.remove(animationType);
            }
        }
    }

    /**
     * Update slide-specific CSS classes
     */
    updateSlideClasses(slide) {
        // Remove all slide-specific classes from body
        document.body.className = document.body.className.replace(/slide-\d+/g, '');
        
        // Add current slide class
        document.body.classList.add(`slide-${this.currentSlide}`);
        
        // Add slide type classes based on content
        if (slide.querySelector('h1')) {
            slide.classList.add('title-slide');
        } else {
            slide.classList.add('content-slide');
        }
    }

    /**
     * Set up global event listeners
     */
    setupGlobalListeners() {
        // Keyboard shortcuts
        document.addEventListener('keydown', (event) => {
            this.handleKeyboard(event);
        });
        
        // Window resize handling
        window.addEventListener('resize', () => {
            this.handleResize();
        });
    }

    /**
     * Handle custom keyboard shortcuts
     */
    handleKeyboard(event) {
        // Custom keyboard shortcuts can be added here
        // Most navigation is handled by Reveal.js
        
        switch (event.key) {
            case 'r':
                if (event.ctrlKey || event.metaKey) {
                    event.preventDefault();
                    this.restartPresentation();
                }
                break;
        }
    }

    /**
     * Handle window resize
     */
    handleResize() {
        if (this.deck) {
            // Let Reveal.js handle the resize
            this.deck.layout();
        }
    }

    /**
     * Restart presentation from the beginning
     */
    restartPresentation() {
        if (this.deck) {
            this.deck.slide(0);
        }
    }

    /**
     * Show initialization error
     */
    showInitializationError(error) {
        const container = document.getElementById('slides-container');
        container.innerHTML = `
            <section class="error-slide">
                <h1>Errore di Inizializzazione</h1>
                <p>Si è verificato un errore durante l'inizializzazione della presentazione:</p>
                <pre><code>${error.message}</code></pre>
                <p><small>Controllare la console del browser per maggiori dettagli.</small></p>
            </section>
        `;
    }

    /**
     * Get current slide information
     */
    getCurrentSlideInfo() {
        return {
            current: this.currentSlide,
            total: this.totalSlides,
            progress: this.totalSlides > 0 ? (this.currentSlide / this.totalSlides) * 100 : 0
        };
    }
}

// Initialize the deck when the DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
    const deck = new FinanceDeck();
    await deck.init();
    
    // Make deck globally available for debugging
    window.financeDeck = deck;
});
