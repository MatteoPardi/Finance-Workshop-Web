// Slide Loader Module
// Handles dynamic loading of markdown slide files

class SlideLoader {
    constructor() {
        this.loadedSlides = [];
        this.container = document.getElementById('slides-container');
    }

    /**
     * Load all slides from the configured slide files
     */
    async loadAllSlides() {
        try {
            console.log('Loading slides...');
            
            // Clear any existing static slides before loading dynamic ones
            this.clearStaticSlides();
            
            for (const slideFile of window.SLIDE_FILES) {
                await this.loadSlideFile(slideFile);
            }
            
            console.log(`Successfully loaded ${this.loadedSlides.length} slides`);
            return this.loadedSlides;
            
        } catch (error) {
            console.error('Error loading slides:', error);
            this.showErrorSlide(error);
            return [];
        }
    }

    /**
     * Clear static slides to avoid duplication with dynamic ones
     */
    clearStaticSlides() {
        console.log('Clearing static fallback slides...');
        
        // Remove all existing sections to avoid duplication
        // The dynamic slides will be added by processMarkdownContent
        this.container.innerHTML = '';
    }

    /**
     * Load a single slide file
     */
    async loadSlideFile(filePath) {
        try {
            const response = await fetch(filePath);
            
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
            }
            
            const content = await response.text();
            this.processMarkdownContent(content, filePath);
            
        } catch (error) {
            console.error(`Error loading slide file ${filePath}:`, error);
            // Create a placeholder slide for missing files
            this.createErrorSlide(filePath, error.message);
        }
    }

    /**
     * Process markdown content and create slide sections
     */
    processMarkdownContent(content, filePath) {
        // Split content by horizontal rules (slide separators)
        const slides = content.split(/^---$/m);
        
        slides.forEach((slideContent, index) => {
            if (slideContent.trim()) {
                this.createSlideSection(slideContent.trim(), `${filePath}-${index}`);
            }
        });
    }

    /**
     * Create a slide section element
     */
    createSlideSection(content, slideId) {
        const section = document.createElement('section');
        section.setAttribute('data-markdown', '');
        section.setAttribute('data-separator', '^---$');
        section.setAttribute('data-separator-vertical', '^--$');
        section.setAttribute('id', slideId);
        
        // Create script tag with markdown content
        const script = document.createElement('script');
        script.type = 'text/template';
        script.textContent = content;
        
        section.appendChild(script);
        this.container.appendChild(section);
        
        this.loadedSlides.push({
            id: slideId,
            content: content,
            element: section
        });
        
        console.log(`Created slide: ${slideId}`);
    }

    /**
     * Create an error slide for missing or failed slides
     */
    createErrorSlide(filePath, errorMessage) {
        const section = document.createElement('section');
        section.setAttribute('data-markdown', '');
        
        const script = document.createElement('script');
        script.type = 'text/template';
        script.textContent = `
## Errore di Caricamento

**File:** \`${filePath}\`

**Errore:** ${errorMessage}

---

*Questa slide verrà sostituita quando il file sarà disponibile.*
        `;
        
        section.appendChild(script);
        this.container.appendChild(section);
    }

    /**
     * Show a general error slide when slide loading fails completely
     */
    showErrorSlide(error) {
        this.container.innerHTML = `
            <section class="error-slide">
                <h2>⚠️ Errore di Caricamento</h2>
                <p>Si è verificato un errore durante il caricamento delle slide:</p>
                <div style="background: #f8f8f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <code style="color: #d63384;">${error.message}</code>
                </div>
                <p><small>💡 Verificare la connessione di rete e ricaricare la pagina.</small></p>
                <p><small>🔧 Controllare la console del browser per dettagli tecnici.</small></p>
            </section>
        `;
    }

    /**
     * Get the number of loaded slides
     */
    getSlideCount() {
        return this.loadedSlides.length;
    }

    /**
     * Get slide by ID
     */
    getSlideById(slideId) {
        return this.loadedSlides.find(slide => slide.id === slideId);
    }
}

// Export for use in other modules
window.SlideLoader = SlideLoader;
