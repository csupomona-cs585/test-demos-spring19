package edu.cpp.cs585.svv;

import org.junit.Assert;
import org.junit.Test;

public class AccountTest {
	
	@Test
	public void testDeposit() {
		Account account = new Account("Yu", 34734, 5000);
		boolean result = account.deposit(500);
		Assert.assertTrue(result);
		Assert.assertEquals(5500, account.getBalance(), 0);
		
		result = account.deposit(5000);
		Assert.assertTrue(result);
		Assert.assertEquals(10500, account.getBalance(), 0);		
	}
	
	@Test
	public void testDepositWithInvalidAmount() {
		Account account = new Account("Yu", 34734, 1000);
		boolean result = account.deposit(-500);
		Assert.assertFalse(result);
		Assert.assertEquals(1000, account.getBalance(), 0);					
	}
	
	@Test
	public void testConstructor() {
		Account account = new Account("Yu", 34734, 5000);
		Assert.assertEquals("Yu", account.name);
		Assert.assertEquals(34734, account.getAccountNumber());
		Assert.assertEquals(5000, account.getBalance(), 0);
	}
	
	@Test
	public void testWithdraw() {
		Account account = new Account("Yu", 34734, 5000);
		boolean result = account.withdraw(500, 5);
		Assert.assertTrue(result);
		Assert.assertEquals(4495, account.getBalance(), 0);
	}
	
	@Test
	public void testWithdrawWithInvalidAmount() {
		Account account = new Account("Yu", 34734, 5000);
		boolean result = account.withdraw(-500, 5);
		Assert.assertFalse(result);
		Assert.assertEquals(5000, account.getBalance(), 0);
	}
	
	@Test
	public void testWithdrawWithInvalidFee() {
		Account account = new Account("Yu", 34734, 5000);
		boolean result = account.withdraw(500, -5);
		Assert.assertFalse(result);
		Assert.assertEquals(5000, account.getBalance(), 0);
	}

}
