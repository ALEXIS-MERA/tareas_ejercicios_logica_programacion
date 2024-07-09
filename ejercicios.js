class LogicaProgramacion {
    // Método para obtener los divisores de un número
    static divisores(numero) {
        let divisores = [];
        for (let i = 1; i <= numero; i++) {
            if (numero % i === 0) {
                divisores.push(i);
            }
        }
        return divisores;
    }

    // Método para verificar si un número es perfecto
    static esPerfecto(numero) {
        let suma = 0;
        for (let i = 1; i < numero; i++) {
            if (numero % i === 0) {
                suma += i;
            }
        }
        return suma === numero;
    }

    // Método para verificar si un número es primo
    static esPrimo(numero) {
        if (numero <= 1) {
            return false;
        }
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                return false;
            }
        }
        return true;
    }

    // Método para verificar si dos números son primos gemelos
    static primosGemelos(numero1, numero2) {
        if (this.esPrimo(numero1) && this.esPrimo(numero2) && Math.abs(numero1 - numero2) === 2) {
            return true;
        }
        return false;
    }

    // Método para concatenar dos cadenas
    static concatenarCadenas(cadena1, cadena2) {
        return cadena1 + cadena2;
    }

    // Método para buscar una subcadena
    static buscarSubcadena(cadena, subcadena) {
        for (let i = 0; i <= cadena.length - subcadena.length; i++) {
            let encontrado = true;
            for (let j = 0; j < subcadena.length; j++) {
                if (cadena[i + j] !== subcadena[j]) {
                    encontrado = false;
                    break;
                }
            }
            if (encontrado) {
                return true;
            }
        }
        return false;
    }

    // Método para insertar una subcadena en una posición específica
    static insertarSubcadena(cadena, subcadena, posicion) {
        let resultado = '';
        for (let i = 0; i < cadena.length; i++) {
            if (i === posicion) {
                resultado += subcadena;
            }
            resultado += cadena[i];
        }
        if (posicion >= cadena.length) {
            resultado += subcadena;
        }
        return resultado;
    }

    // Método para eliminar una subcadena
    static eliminarSubcadena(cadena, subcadena) {
        let resultado = '';
        for (let i = 0; i < cadena.length; i++) {
            let coincide = true;
            for (let j = 0; j < subcadena.length; j++) {
                if (cadena[i + j] !== subcadena[j]) {
                    coincide = false;
                    break;
                }
            }
            if (coincide) {
                i += subcadena.length - 1; // Saltar la longitud de la subcadena
            } else {
                resultado += cadena[i];
            }
        }
        return resultado;
    }

    // Método para convertir un arreglo a cadena
    static arregloACadena(arreglo, separador = ',') {
        let resultado = '';
        for (let i = 0; i < arreglo.length; i++) {
            resultado += arreglo[i];
            if (i < arreglo.length - 1) {
                resultado += separador;
            }
        }
        return resultado;
    }

    // Método para encontrar el mayor elemento de un arreglo
    static mayorDeArreglo(arreglo) {
        if (arreglo.length === 0) return null;
        let mayor = arreglo[0];
        for (let i = 1; i < arreglo.length; i++) {
            if (arreglo[i] > mayor) {
                mayor = arreglo[i];
            }
        }
        return mayor;
    }

    // Método para buscar un elemento en un arreglo
    static buscarEnArreglo(arreglo, elemento) {
        for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i] === elemento) {
                return true;
            }
        }
        return false;
    }

    // Método para insertar un elemento en una posición específica en un arreglo
    static insertarEnArreglo(arreglo, elemento, posicion) {
        let resultado = [];
        for (let i = 0; i < arreglo.length; i++) {
            if (i === posicion) {
                resultado.push(elemento);
            }
            resultado.push(arreglo[i]);
        }
        if (posicion >= arreglo.length) {
            resultado.push(elemento);
        }
        return resultado;
    }

    // Método para eliminar un elemento de un arreglo
    static eliminarDeArreglo(arreglo, elemento) {
        let resultado = [];
        for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i] !== elemento) {
                resultado.push(arreglo[i]);
            }
        }
        return resultado;
    }

    // Método para convertir una cadena a arreglo
    static cadenaAArreglo(cadena, separador) {
        let resultado = [];
        let temp = '';
        for (let i = 0; i < cadena.length; i++) {
            if (cadena[i] === separador) {
                resultado.push(temp);
                temp = '';
            } else {
                temp += cadena[i];
            }
        }
        resultado.push(temp);
        return resultado;
    }

    // Método para convertir de base 10 a base 2
    static base10ABase2(numero) {
        let resultado = '';
        while (numero > 0) {
            resultado = (numero % 2) + resultado;
            numero = Math.floor(numero / 2);
        }
        return resultado === '' ? '0' : resultado;
    }

    // Método para convertir de base 10 a base 8
    static base10ABase8(numero) {
        let resultado = '';
        while (numero > 0) {
            resultado = (numero % 8) + resultado;
            numero = Math.floor(numero / 8);
        }
        return resultado === '' ? '0' : resultado;
    }

    // Método para convertir de base 10 a base 16
    static base10ABase16(numero) {
        const hexDigits = '0123456789ABCDEF';
        let resultado = '';
        while (numero > 0) {
            resultado = hexDigits[numero % 16] + resultado;
            numero = Math.floor(numero / 16);
        }
        return resultado === '' ? '0' : resultado;
    }

    // Método para convertir de base 2 a base 10
    static base2ABase10(binario) {
        let resultado = 0;
        let potencia = 1;
        for (let i = binario.length - 1; i >= 0; i--) {
            resultado += (binario[i] === '1' ? 1 : 0) * potencia;
            potencia *= 2;
        }
        return resultado;
    }

    // Método para convertir de base 2 a base 8
    static base2ABase8(binario) {
        let base10 = this.base2ABase10(binario);
        return this.base10ABase8(base10);
    }

    // Método para convertir de base 2 a base 16
    static base2ABase16(binario) {
        let base10 = this.base2ABase10(binario);
        return this.base10ABase16(base10);
    }
}

console.log("1. Divisores de un número");
console.log("Divisores de 28:", LogicaProgramacion.divisores(28));

console.log("\n2. Número perfecto");
console.log("¿Es 28 un número perfecto?:", LogicaProgramacion.esPerfecto(28));
console.log("¿Es 6 un número perfecto?:", LogicaProgramacion.esPerfecto(6));
console.log("¿Es 12 un número perfecto?:", LogicaProgramacion.esPerfecto(12));

console.log("\n3. Número primo");
console.log("¿Es 7 un número primo?:", LogicaProgramacion.esPrimo(7));
console.log("¿Es 10 un número primo?:", LogicaProgramacion.esPrimo(10));

console.log("\n4. Primos gemelos");
console.log("¿Son 11 y 13 primos gemelos?:", LogicaProgramacion.primosGemelos(11, 13));
console.log("¿Son 17 y 19 primos gemelos?:", LogicaProgramacion.primosGemelos(17, 19));
console.log("¿Son 5 y 7 primos gemelos?:", LogicaProgramacion.primosGemelos(5, 7));
console.log("¿Son 7 y 11 primos gemelos?:", LogicaProgramacion.primosGemelos(7, 11));

console.log("\n5. Concatenar dos cadenas");
console.log("Concatenación de 'Hola, ' y 'mundo!':", LogicaProgramacion.concatenarCadenas("Hola, ", "mundo!"));
console.log("Concatenación de 'JavaScript ' y 'es genial!':", LogicaProgramacion.concatenarCadenas("JavaScript ", "es genial!"));

console.log('\n6. Buscar una subcadena');
console.log("¿'mundo' está en 'Hola, mundo!'?:", LogicaProgramacion.buscarSubcadena("Hola, mundo!", "mundo"));

console.log('\n7. Insertar una subcadena');
console.log("Insertar 'genial ' en 'JavaScript es !' en la posición 11:", LogicaProgramacion.insertarSubcadena("JavaScript es !", "genial ", 11));

console.log('\n8. Eliminar una subcadena');
console.log("Eliminar 'mundo' de 'Hola, mundo!':", LogicaProgramacion.eliminarSubcadena("Hola, mundo!", "mundo"));

console.log('\n9. Convertir un arreglo a cadena');
console.log("Convertir ['JavaScript', 'es', 'genial'] a cadena:", LogicaProgramacion.arregloACadena(['JavaScript', 'es', 'genial'], ' '));

console.log('\n10. Mayor de un arreglo');
console.log("El mayor de [3, 5, 7, 2, 8] es:", LogicaProgramacion.mayorDeArreglo([3, 5, 7, 2, 8]));

console.log("\n11. Buscar en un arreglo");
console.log("¿7 está en [1, 3, 5, 7, 9]?:", LogicaProgramacion.buscarEnArreglo([1, 3, 5, 7, 9], 7));
console.log("¿2 está en [1, 3, 5, 7, 9]?:", LogicaProgramacion.buscarEnArreglo([1, 3, 5, 7, 9], 2));

console.log("\n12. Insertar en un arreglo");
console.log("Insertar 4 en [1, 2, 3, 5] en la posición 3:", LogicaProgramacion.insertarEnArreglo([1, 2, 3, 5], 4, 3));

console.log("\n13. Eliminar de un arreglo");
console.log("Eliminar 3 de [1, 2, 3, 4, 5]:", LogicaProgramacion.eliminarDeArreglo([1, 2, 3, 4, 5], 3));

console.log("\n14. Convertir una cadena a arreglo");
console.log("Convertir 'JavaScript,es,genial' a arreglo:", LogicaProgramacion.cadenaAArreglo('JavaScript,es,genial', ','));

console.log("\n15. Convertir de base 10 a base 2");
console.log("El número 10 en base 2 es:", LogicaProgramacion.base10ABase2(10));

console.log("\n16. Convertir de base 10 a base 8");
console.log("El número 10 en base 8 es:", LogicaProgramacion.base10ABase8(10));

console.log("\n17. Convertir de base 10 a base 16");
console.log("El número 10 en base 16 es:", LogicaProgramacion.base10ABase16(10));

console.log("\n18. Convertir de base 2 a base 10");
console.log("El binario '1010' en base 10 es:", LogicaProgramacion.base2ABase10('1010'));

console.log("\n19. Convertir de base 2 a base 8");
console.log("El binario '1010' en base 8 es:", LogicaProgramacion.base2ABase8('1010'));

console.log("\n20. Convertir de base 2 a base 16");
console.log("El binario '1010' en base 16 es:", LogicaProgramacion.base2ABase16('1010'));
