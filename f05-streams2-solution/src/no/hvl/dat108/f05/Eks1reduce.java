package no.hvl.dat108.f05;

import static no.hvl.dat108.f05.People.people;

public class Eks1reduce {
	
	public static void main(String[] args) {
		
		/* Summen av aldrene til personene i people-listen */
		
		int sumAlder = people.stream().map(Person::age).reduce(0,  (sum, a) -> sum + a);
		
		/*
		int sum;
		int a;
		int sumAlder2 = people.stream().map(Person::age).reduce(0,  Integer.sum(sum, a));
		*/

		int sumAlder3 = people.stream().map(Person::age).reduce(0, Integer::sum);
		
		
		/* En streng med alle initialene, "CD LC TC CB MA" */
		String initialer = people.stream().map(p -> "" + p.firstName().charAt(0) +
				p.lastName().charAt(0)).reduce("", (a, b) -> a + b + " ");
		System.out.println(initialer);
		
		//System.out.println("" + 't' + 'y');
		
		//people.stream().map(p -> "" + p.firstName().charAt(0) +
		//		p.lastName().charAt(0)).forEach(System.out::println);
		
		//people.stream().map(p -> p.firstName().charAt(0) +
		//		p.lastName().charAt(0)).forEach(o -> System.out.println(o.getClass()));
		
	}	
}
