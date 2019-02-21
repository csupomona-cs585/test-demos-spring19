package edu.cpp.cs585.svv;

public class WaitingRecord {

	private String name;
	private String waitingTimeInMins;
	
	public String getWaitingTimeInMins() {
		return waitingTimeInMins;
	}
	
	public void setWaitingTimeInMins(String waitingTimeInMins) {
		this.waitingTimeInMins = waitingTimeInMins;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
}
