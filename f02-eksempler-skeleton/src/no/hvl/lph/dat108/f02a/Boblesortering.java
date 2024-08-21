package no.hvl.lph.dat108.f02a;

import java.util.List;

public class Boblesortering {

	public static <T extends Comparable<T>> void sorter(List<Integer> liste) {
		
		for (int i=0; i<liste.size(); i++) {
			for (int j=1; j<liste.size(); j++) {
				int a = liste.get(j-1);
				int b = liste.get(j);
				
				if (a > b) { //Dette er den sentrale linjen
					
					liste.set(j-1, b);
					liste.set(j, a);
				}
			}
		}
	}
}
