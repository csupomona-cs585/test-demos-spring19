package edu.cpp.cs585.svv;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class CreditCardVerifierTest {
	
	private CreditCardVerifier cardVerifier;
	
	@Before
	public void setup() {
		cardVerifier = new CreditCardVerifier();
		System.out.println("Creating an instance CCV");
	}
	
	@After
	public void cleanup() {
		System.out.println("Cleaning up the test env");
	}

	@Test
	public void testIsValid1() throws NonDigitCreditCardNumberException {	
		boolean result = cardVerifier.isValid("378282246310005");
		Assert.assertEquals(true, result);
	}
	
	@Test
	public void testIsValid2() throws NonDigitCreditCardNumberException {
		Assert.assertNotNull(cardVerifier);
		boolean result = cardVerifier.isValid("378286746310005");
		Assert.assertFalse(result);		
	}
	
	@Test
	public void testIsValid3() throws NonDigitCreditCardNumberException {
		boolean result = cardVerifier.isValid("378282246320005");
		Assert.assertEquals(false, result);
	}
	
	@Test(expected = NonDigitCreditCardNumberException.class)
	public void testIsValidWithException() throws NonDigitCreditCardNumberException {
		boolean result = cardVerifier.isValid("323fsdfsdf23");		
	}
	
	@Test
	public void testIsValidWithException2() {		
		try {
			boolean result = cardVerifier.isValid("323fsdfsdf23");
			Assert.fail("The class should have thrown the NonDigitCreditCardNumberException exception.");
		} catch (NonDigitCreditCardNumberException e) {
			Assert.assertTrue(true);
		} catch (Exception e) {
			Assert.fail("The class should have thrown the NonDigitCreditCardNumberException exception.");
		}
	}
	
	@Test(timeout = 500)
	public void testIsValidWithinTimeout500ms() throws NonDigitCreditCardNumberException {		
		boolean result = cardVerifier.isValid("12312321312321");		
	}
	
	@Test
	public void testRandomTest() {
		int[] a = {1, 2, 3, 4, 5};
		int[] b = {1, 2, 3, 4, 5};
		Assert.assertNotNull(a);
		Assert.assertNotNull(b);
		Assert.assertEquals(a.length, b.length);
		for(int i = 0; i < a.length; i++) {
			Assert.assertEquals(a[i], b[i]);
		}
		Assert.assertArrayEquals(a, b);
	}
	
	@Test
	public void testSameTest() {
		String s1 = "abc";
		String s2 = "a";
		s2 += "bc";
		
		System.out.println(s1);
		System.out.println(s2);
				
		System.out.println(System.identityHashCode(s1));
		System.out.println(System.identityHashCode(s2));
		Assert.assertEquals(s1, s2);
		Assert.assertNotSame(s1, s2);
	}
}
