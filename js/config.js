// Configuration for the Finance Workshop Presentation

// List of slide files to load in order
const SLIDE_FILES = [
    'slides/intro.md',
    'slides/block1.md'
];

// Reveal.js configuration
const REVEAL_CONFIG = {
    // Display controls in the bottom right corner
    controls: true,
    
    // Display a presentation progress bar
    progress: true,
    
    // Display the page number of the current slide
    slideNumber: true,
    
    // Enable keyboard shortcuts for navigation
    keyboard: true,
    
    // Enable touch navigation on devices with touch input
    touch: true,
    
    // Enables a click on the heading to go to the slide
    clickToReveal: true,
    
    // Transition style
    transition: 'slide', // none/fade/slide/convex/concave/zoom
    
    // Transition speed
    transitionSpeed: 'default', // default/fast/slow
    
    // Transition style for full page slide backgrounds
    backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom
    
    // The "normal" size of the presentation, aspect ratio will be preserved
    // when the presentation is scaled to fit different resolutions
    width: 1024,
    height: 768,
    
    // Factor of the display size that should remain empty around the content
    margin: 0.1,
    
    // Bounds for smallest/largest possible scale to apply to content
    minScale: 0.2,
    maxScale: 1.5,
    
    // Enable plugins
    plugins: [
        RevealMarkdown,
        RevealHighlight,
        RevealNotes
    ],
    
    // Markdown plugin configuration
    markdown: {
        smartypants: true
    },
    
    // Highlight plugin configuration
    highlight: {
        highlightOnLoad: true
    }
};

// Chart configuration defaults
const CHART_CONFIG = {
    responsive: true,
    displayModeBar: false,
    staticPlot: false
};

// Export configurations for use in other modules
window.SLIDE_FILES = SLIDE_FILES;
window.REVEAL_CONFIG = REVEAL_CONFIG;
window.CHART_CONFIG = CHART_CONFIG;
