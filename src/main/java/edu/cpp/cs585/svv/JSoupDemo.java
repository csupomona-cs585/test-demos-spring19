package edu.cpp.cs585.svv;

import java.io.IOException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class JSoupDemo {

	public static void main(String[] args) throws IOException {
		Document doc = Jsoup.connect("http://en.wikipedia.org/").get();
		System.out.println(doc.title());
		Elements newsHeadlines = doc.select("#mp-itn b a");
		for (Element headline : newsHeadlines) {
		  System.out.println(headline.attr("title") + " " + headline.absUrl("href"));
		}
	}
}
