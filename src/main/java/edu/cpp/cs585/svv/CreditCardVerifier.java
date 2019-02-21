package edu.cpp.cs585.svv;

public class CreditCardVerifier {

	public boolean isValid(String creditCardNumber) throws NonDigitCreditCardNumberException {
		// 0. Check if the string has non-digit chars
		for(int i = 0; i < creditCardNumber.length(); i++) {
			if (creditCardNumber.charAt(i) < '0' ||
					creditCardNumber.charAt(i) > '9') {
				throw new NonDigitCreditCardNumberException("Non-digit char is found in the credit card number.");
			}
		}
		
		long num = Long.parseLong(creditCardNumber);
		// 1. get every other digit from the second-to-last
		long num1 = num / 10;
		long sum1 = 0;
		while (num1 != 0) {
			long d = num1 % 10 * 2;
			if (d < 10) {
				sum1 += d;
			} else {
				long d1 = d / 10;
				long d2 = d % 10;
				sum1 += d1 + d2;
			}			
			num1 = num1 / 100;
		}
		// 2. get every other digit from the last 
		long num2 = num;
		long sum2 = 0;
		while (num2 != 0) {
			long d = num2 % 10;
			sum2 += d;
			num2 = num2 / 100;
		}
		// 3. get the total sum
		long sum = sum1 + sum2;
		return sum % 10 == 0;
	}	
	

}
