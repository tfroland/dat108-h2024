package no.hvl.lph.dat108.f02a;

public class Fornavnsammenligner implements Sammenligner<Person> {

	@Override
	public int sammenlign(Person a, Person b) {
		return a.fornavn().compareTo((b.fornavn()));
	}

}
