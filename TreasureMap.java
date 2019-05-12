import java.util.Random;

public class TreasureMap {
 	public static void main(String[] args) {		
		
		Random aleatorio = new Random();
		System.out.println("+-----------+");
		for (int i = 0; i <4; i++){
			System.out.print("|");
			for (int j = 0; j <4; j++){
				System.out.print((1+aleatorio.nextInt(3)) + "" + (1+aleatorio.nextInt(3)) + "|");
			}
			System.out.println(""); 			
			System.out.println("+-----------+");
		} 
	}
}