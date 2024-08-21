package no.hvl.lph.dat108.f02a;

import java.util.List;

public class Boblesortering {

	public static <T extends Comparable<T>> void sorter(List<T> liste) {
		
		for (int i=0; i<liste.size(); i++) {
			for (int j=1; j<liste.size(); j++) {
				T a = liste.get(j-1);
				T b = liste.get(j);
				
				if (a.compareTo(b) > 0) { //Dette er den sentrale linjen
					
					liste.set(j-1, b);
					liste.set(j, a);
				}
			}
		}
	}

	public static <T extends Comparable<T>> void sorter(List<T> liste, Sammenligner<T> s) {
		
		for (int i=0; i<liste.size(); i++) {
			for (int j=1; j<liste.size(); j++) {
				T a = liste.get(j-1);
				T b = liste.get(j);
				
				if (s.sammenlign(a, b) > 0) { //Dette er den sentrale linjen
					
					liste.set(j-1, b);
					liste.set(j, a);
				}
			}
		}
	}
}
