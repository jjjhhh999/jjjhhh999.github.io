const FOCUSABLE_ELEMENT_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

export default {
  data() {
    return {
      previouslyFocusedElement: null,
      previousBodyOverflow: '',
    };
  },
  mounted() {
    this.previouslyFocusedElement = document.activeElement;
    this.previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', this.handleModalKeydown);

    this.$nextTick(() => {
      const [firstFocusableElement] = this.getFocusableElements();
      const initialFocusTarget = firstFocusableElement || this.$refs.modalContainer;

      if (initialFocusTarget) {
        initialFocusTarget.focus();
      }
    });
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleModalKeydown);
    document.body.style.overflow = this.previousBodyOverflow;

    if (
      this.previouslyFocusedElement &&
      document.contains(this.previouslyFocusedElement)
    ) {
      this.previouslyFocusedElement.focus();
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    getFocusableElements() {
      const modalContainer = this.$refs.modalContainer;

      if (!modalContainer) {
        return [];
      }

      return Array.from(
        modalContainer.querySelectorAll(FOCUSABLE_ELEMENT_SELECTOR)
      ).filter((element) => element.offsetParent !== null);
    },
    handleModalKeydown(event) {
      if (event.key === 'Escape' || event.key === 'Esc') {
        event.preventDefault();
        this.closeModal();
        return;
      }

      if (event.key !== 'Tab') {
        return;
      }

      const focusableElements = this.getFocusableElements();

      if (focusableElements.length === 0) {
        event.preventDefault();
        this.$refs.modalContainer.focus();
        return;
      }

      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstFocusableElement) {
        event.preventDefault();
        lastFocusableElement.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === lastFocusableElement
      ) {
        event.preventDefault();
        firstFocusableElement.focus();
      }
    },
  },
};
