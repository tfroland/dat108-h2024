package no.hvl.lph.dat108.f02b;

import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Main {

	public static void main(String[] args) {

		//1. Sortere i "naturlig" rekkefølge i hht. String compareTo. OK
		List<String> listen = Arrays.asList("Hallo", "blabla", "Hello", "knut", "Per");
		System.out.println("Originallisten: " + listen);
		
		Collections.sort(listen);
		System.out.println("Naturlig sortering: " + listen);
		
		//2. Sortere alfabetisk uavhengig av store og små bokstaver
//		Collections.sort(listen, new Comparator<String>() {
//			@Override
//			public int compare(String a, String b) {
//				return a.compareToIgnoreCase(b);
//			}
//		});
//		System.out.println("Alfabetisk sortert uten case:" + listen);
		
		//3. ..., nå med lambda-uttrykk !!! :)
		Collections.sort(listen, (a, b) -> a.compareToIgnoreCase(b));
		System.out.println("Alfabetisk sortert uten case:" + listen);
		
		//4. Sortere på lengden på strengene (med lambda-uttrykk)
		Collections.sort(listen, (a, b) -> a.length() - b.length());
		System.out.println("Sortert på lengde:" + listen);
		
		//5. Sortere på lengden synkende. Putte lambda-uttrykk inn i variabel.
		Comparator<String> lengdeSynkende = (a, b) -> b.length() - a.length();
		
		Collections.sort(listen, lengdeSynkende);
		System.out.println("Strenglengde synkende" + listen);
	}
}

