// Mock users
export const users = [
    { id: 1, name: 'Jemari', email: 'jemari@example.com' }
];

// Mock products (PDFs)
export const products = [
    { id: 1, title: 'Inspection Report 101', resale_price: 49.99, inspector_id: 123, private_file: 'report-101.pdf' }
];

// Mock orders (simulates payment completed)
export const orders = [
    { id: 1, product_id: 1, purchaser_id: 1, purchase_date: new Date() }
];
