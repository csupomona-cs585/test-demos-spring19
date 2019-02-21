package edu.cpp.cs585.svv;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class WaitingTimeTrackerTest {

	public static Map<String, Boolean> mustHaveRides;
	
	@Before
	public void setupTest() {
		mustHaveRides = new HashMap<String, Boolean>() {{
			put("Transformers", false);
			put("Harry Potter and the Forbidden Journey™", false);
			put("Simpsons", false);
		}};
	}
	
	@Test
	public void testGetLatestWaitingTimeRecordsWithLocalSampleFile() throws IOException {		
		File testSampleFile = new File("src/test/resources/waiting-time-page-sample.htm");		
		WaitingTimeTracker tracker = new WaitingTimeTracker(testSampleFile);
		List<WaitingRecord> recordList = tracker.getLatestWaitingTimeRecords();
		verifyReturnedRideList(recordList);
		
		// show the code coverage
		int c = 0;
		for(int i = 0; i < 13; i++) {
			System.out.println("Line " + i + ": " 
				+ WaitingTimeTracker.counter[i]);
			if (WaitingTimeTracker.counter[i] == 1) {
				c++;
			}
		}
		System.out.println("Code Coverage: " + ((float)c / 13.0f));
	}
	
	private void verifyReturnedRideList(List<WaitingRecord> recordList) {
		Assert.assertNotNull(recordList);
		Assert.assertTrue(recordList.size() > 10);
		
		int totalMatch = 0;
		for(WaitingRecord r : recordList) {
			if (mustHaveRides.containsKey(r.getName())) {
				mustHaveRides.put(r.getName(), true);
				totalMatch++;
				Assert.assertNotNull(r.getWaitingTimeInMins());
				Assert.assertTrue(containsDigit(r.getWaitingTimeInMins()));
			}
		}
		Assert.assertEquals(3, totalMatch);
		for(Boolean b : mustHaveRides.values()) {
			Assert.assertTrue(b);
		}
	}
	
	private static boolean containsDigit(String str) {		
		for(int i = 0; i < str.length(); i++) {
			if (str.charAt(i) >= '0' && str.charAt(i) <= '9') {
				return true;
			}
		}
		return false;
	}
	
}
