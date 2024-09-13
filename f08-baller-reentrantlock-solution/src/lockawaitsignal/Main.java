package lockawaitsignal;

import java.util.concurrent.locks.ReentrantLock;
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.Lock;

public class Main {

	public static void main(String[] args) {

		Melding melding = new Melding();
		Lock lock = new ReentrantLock();
		Condition harTekst = lock.newCondition();

		Thread printlnTraad = new Thread(new Runnable() {
			@Override
			public void run() {
				lock.lock();
					try {
						while (!melding.harTekst()) {
							harTekst.await();
						}
						System.out.println(melding.getTekst());
					} catch (InterruptedException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					} finally {
						lock.unlock();
				}
				
			}
		});

		Thread giVerdiTraad = new Thread(new Runnable() {
			@Override
			public void run() {
				lock.lock();
				try {
					melding.setTekst("Hallo");
					harTekst.signalAll();
				} finally {
					lock.unlock();
				}
				
			}
		});

		printlnTraad.start();
		giVerdiTraad.start();
	}

}
