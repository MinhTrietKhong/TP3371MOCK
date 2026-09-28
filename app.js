// WEEK 6 — SESSION 1 SOLUTION
// Goal: practice JavaScript values, decisions, functions, and the console.
// We are NOT reading from the HTML form yet. That begins in Session 2.

const DIRECTOR_APPROVAL_THRESHOLD = 5000;
const RECEIPT_THRESHOLD = 75;

// Example transaction amount for testing.
let expenseAmount = 50;

function requiresDirectorApproval(amount) {
  return amount > DIRECTOR_APPROVAL_THRESHOLD;
}

function requiresReceipt(amount) {
  return amount > RECEIPT_THRESHOLD;
}

const directorApprovalRequired = requiresDirectorApproval(expenseAmount);
const receiptRequired = requiresReceipt(expenseAmount);

console.log('Expense amount:', expenseAmount);
console.log('Receipt required:', receiptRequired);
console.log('Director approval required:', directorApprovalRequired);

if (directorApprovalRequired) {
  console.log('Approval path: Manager + Director');
} else {
  console.log('Approval path: Standard manager review');
}

// Try changing expenseAmount to 50, 250, 5000, and 5600.
