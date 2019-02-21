package edu.cpp.cs585.svv;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class WaitingTimeTracker {
	
	private static final String SRC_URL = "https://m.universalstudioshollywood.com/waittimes/?type=all&site=USH";
	
	private Document doc;
	
	public WaitingTimeTracker() {
		try {
			doc = Jsoup.connect(SRC_URL).get();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public WaitingTimeTracker(String srcUrl) {
		try {
			doc = Jsoup.connect(srcUrl).get();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public WaitingTimeTracker(File srcFile) {
		try {
			doc = Jsoup.parse(srcFile, "UTF-8", "https://m.universalstudioshollywood.com/");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public static int[] counter = new int[100];
	
	public List<WaitingRecord> getLatestWaitingTimeRecords() throws IOException {
		counter[0] = 1;
		List<WaitingRecord> records = new ArrayList<WaitingRecord>();
		counter[1] = 1;
		Elements timeRowElements = doc.select(".timeRow");
		counter[2] = 1;
		for (Element e : timeRowElements) {
		  counter[3] = 1;
		  Elements titleElements = e.select(".timeTitle");
		  counter[4] = 1;
		  Elements timeElements = e.select(".timeTime");
		  counter[5] = 1;
		  if (titleElements.size() > 0 && timeElements.size() > 0) {
			  counter[6] = 1;
			  String name = titleElements.get(0).text();
			  counter[7] = 1;
			  String time = timeElements.get(0).text();
			  counter[8] = 1;
			  WaitingRecord r = new WaitingRecord();
			  counter[9] = 1;
			  r.setName(name);
			  counter[10] = 1;
			  r.setWaitingTimeInMins(time);
			  counter[11] = 1;
			  records.add(r);			  			 
		  }
		}
		counter[12] = 1;
		return records;
	}
	
	public static void main(String[] args) throws IOException {
		WaitingTimeTracker tracker = new WaitingTimeTracker();
		tracker.getLatestWaitingTimeRecords();
	}
}
