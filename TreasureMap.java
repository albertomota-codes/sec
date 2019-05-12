import java.util.Random;

public class TreasureMap {
 	public static void main(String[] args) {		
		
		int nivel = 2;
		int tamano = 4;

		// AQUI TU ENCARGATE DE COMO LEER EL NIVEL Y EL TAMAÑO
		//
		//
		//
		//TU CODIGO AQUI PARA SOBREESCRIBIR nivel y tamano
		//
		//......


		Random aleatorio = new Random();
		String mapa[][] = new String[tamano][tamano];
		
		// Nivel 1 == 25%...NIvel 2 == 50%.. Nivel 3 == 75%	
		int numeroDePasos = (int) Math.floor((tamano*tamano)/4.0) * nivel;
		int fila = 1;
		int columna = 1;
		int newFila =1;
		int newColumna =1;

		// voy a crear la ruta al tesoro
		for(int i = 0; i < numeroDePasos; i++ ){
			Boolean seguirBuscandoCoordenada = true;

			//buscar una nueva siguiente coordenada, pero asegurarme que este vacia
			while (seguirBuscandoCoordenada) {
				newFila = (1+aleatorio.nextInt(tamano));
				newColumna =  (1+aleatorio.nextInt(tamano));

				seguirBuscandoCoordenada = mapa[newFila-1][newColumna-1] != null || (newFila == fila && newColumna == columna);
			}
				
			// guardo la nueva coordenada en la anterior
			mapa[fila-1][columna-1] = newFila + "" + newColumna;

			// Imprimo las pistas
			System.out.print(newFila + "" + newColumna + ",");

			// guarda la nueva coordenada para en la siguente iteracion, guardar en ella el nuevo paso
			fila = newFila;
			columna = newColumna;
		}
		System.out.println(""); 

		// sobrescribo el  ultimo valor porque y le pongo su mismo valor porque ahi esta el tesoro
		mapa[fila-1][columna-1] = fila + "" + columna;

		// rellenar la matriz con aleatorios donde no pusimos pasos
		for (int i = 0; i <tamano; i++){
			for (int j = 0; j <tamano; j++){
				if(mapa[i][j] == null ){
					mapa[i][j] = (1+aleatorio.nextInt(tamano)) + "" + (1+aleatorio.nextInt(tamano));
				}
			}
		}

		// Imprimir la matriz bonita
		
		String line = "+"+ new String(new char[tamano]).replace("\0", "---") + "+";

		System.out.println(line);
		for (int i = 0; i <tamano; i++){
			System.out.print("|");
			for (int j = 0; j <tamano; j++){
				System.out.print(mapa[i][j] + "|");
			}
			System.out.println(""); 			
			System.out.println(line);
		} 
	}
}
