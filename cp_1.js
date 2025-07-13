//Coding Project 1: User Feedback Form

// 1. Character Count
Form.addEventListener('input', function(e) {
    if (e.target.matched('input', 'textarea')) {
        updateCharCount(e);
    }
});

// 2. Mouse Event Tooltips
form.addEventListener ('mouseover', function(e) {
    if (e.target.matches('input', 'textarea')) {
        const tooltipMsg = e.target.getAttribute ('data-tooltip');
        if (tooltipMsg) showTooltip (e.target, tooltipMsg);
    }
});
form.addEventListener ('mouseout', function(e) {
    if (e.target.matches('input', 'textarea')) {
        hideTooltip(e.target);
    }
});

// 3. Form Validation and Submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    let allValid = true;
        inputFields.forEach (field => {
            if (!validateField(field)) allValid = false;
    });

    if (allValid) {
        const entry = document.createElement('div');
        entry.className = 'feedback-entry';
        entry.innerHTML = `
            <strong>${form.username.value}</stong> (${form.email.value}):<br>
            <em>${form.comments.value}</em>
        `;
        feedbackDisplay.appendChild(entry);

    form.reset();
    inputFields.forEach(field => {
        const countSpan = document.getElementById(`${field.id}-count`);
        if (countSpan) countSpan.textContent = "";
        const errorDiv = document.getElementById(`${field.id}-error`);
        if (errorDiv) error.Div.textContent = "";
      });
    }
  });