package no.hvl.dat108.f06b;

public class _TraaderMedNavnMain {

	public static void main(String[] args) {
		
		/*
		 * Vi kan identifisere tråder via trådens navn via klasse-metoden 
		 * Thread.currentThread().getName()
		 */
		
		Runnable minRunnable = new MinRunnable(); //se def. nederst
		
		// Hva heter main-tråden?
		
				
		// Oppretter og starter 10 tråder som sier hva de heter
		// Trådens navn angis som (valgfri) parameter nr 2 i konstruktøren
		for (int i=1; i<=10; i++) {
			String traadnavn = "tråd" + i;
			Thread t = new Thread(minRunnable, traadnavn);
			t.start();
		}
		System.out.println("Hallo fra " + Thread.currentThread().getName());
	}
}

class MinRunnable implements Runnable {
	@Override
	public void run() {
		String traadnavn = Thread.currentThread().getName();
		System.out.println("Hallo fra " + traadnavn);
	}
}
