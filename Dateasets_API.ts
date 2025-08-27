function generateRandom5DigitNumber(): number {
  const min = 10000; // Minimum 5-digit number
  const max = 99999; // Maximum 5-digit number
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// DEMOQA URL
export const url: string = 'https://demoqa.com/';

//Valid User Data
export const user: string = 'Hamza'+generateRandom5DigitNumber();
export const pass: string = 'Hamza@12345';

// Invalid User password
export const inval_pass: string = 'Test';
export const validationCode: string = "1300";
export const validationMsg: string = "Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.";


//For Token Generation
export const BookvalidationCode: string = "1207";
export const BookvalidationMsg: string = "User Id not correct!"