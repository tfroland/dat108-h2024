package no.hvl.lph.dat108.f02a;

/* Ny mulighet f.o.m. Java16: record - En forenklet måte å lage en dataklasse */
public record Person(String fornavn, String etternavn, int fodselsaar)	
		implements Comparable<Person> {

	/* Ønsker en litt forenklet toString() */
	@Override
	public String toString() {
		return "["+ fornavn + ", " + etternavn + ", " + fodselsaar + "]";
	}
	
	/* Ønsker standard sortering på etternavn */
	@Override
	public int compareTo(Person other) {
		return this.etternavn.compareTo((other.etternavn));
	}
}


