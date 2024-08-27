package no.hvl.lph.dat108.f02c;

import java.util.ArrayList;
import java.util.List;


interface Betingelse {
	boolean sjekk(int x);
}

public class Tallplukker {

	public static List<Integer> plukkUt(List<Integer> liste, Betingelse betingelse) {
		
		List<Integer> svar = new ArrayList<>();
		for(int tall : liste) {
			if(betingelse.sjekk(tall)) { //Denne linjen
				svar.add(tall);
			}
		}
		return svar;
	}
}
