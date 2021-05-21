import '@testing-library/jest-dom'


describe('prueba en el archivo demo.test.js', () => {
    test('las strings tienen que ser iguales', () => {
    
        const message = "Hola Mundo";
    
        const message2 = 'Hola Mundo';
    
        // el expect es como el assert de java
        expect(message).toBe(message2);
    });   
});




