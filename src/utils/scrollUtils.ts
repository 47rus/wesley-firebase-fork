
export const scrollToBookingForm = (selectedPackage?: string) => {
  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    
    // Pre-select the package if provided
    if (selectedPackage) {
      setTimeout(() => {
        const packageSelect = document.querySelector('select[name="selectedPackage"]') as HTMLSelectElement;
        if (packageSelect) {
          const options = Array.from(packageSelect.options);
          const matchingOption = options.find(option => 
            option.value === selectedPackage || option.text.includes(selectedPackage)
          );
          if (matchingOption) {
            packageSelect.value = matchingOption.value;
            // Trigger change event to update form state
            packageSelect.dispatchEvent(new Event('change', { bubbles: true }));
          }
        }
      }, 500); // Small delay to ensure form is rendered
    }
  }
};
