describe('Registro y login', () => {

  it('1. Lanzar un navegador e ingresar a la página web de ejemplo.', () => {
      cy.visit('https://angular-6-registration-login-example.stackblitz.io/register');
  });

  it('2. Hacer clic en el enlace "Cancel" y verificar la URL.', () => {
      cy.visit('https://angular-6-registration-login-example.stackblitz.io/register');
      cy.contains('Run this project').click()

      // Hacer clic en el enlace "Cancel" y verificar la URL
      cy.contains('Cancel').click();
      cy.url().should('include', '/login');
  });

  it('3. Hacer clic en el enlace "Register" y verificar la URL.', () => {
      cy.visit('https://angular-6-registration-login-example.stackblitz.io/login');
      cy.contains('Run this project').click()

      // Hacer clic en el enlace "Register" y verificar la URL
      cy.contains('Register').click();
      cy.url().should('include', '/register');
  });

  it('4. Hacer clic en el botón "Register" y verificar la existencia del texto de retroalimentación del campo del nombre.', () => {
      cy.visit('https://angular-6-registration-login-example.stackblitz.io/register');
      cy.contains('Run this project').click()

      cy.contains('Register').click();
      cy.contains('First Name').should('exist');
  });


  it('5. Llenar todos los campos del formulario de registro con valores cualquiera y la contraseña "MISO4208"', () => {
      cy.visit('https://angular-6-registration-login-example.stackblitz.io/register');
      cy.contains('Run this project').click()


      cy.get('[formcontrolname="firstName"]').type('John');
      cy.get('[formcontrolname="lastName"]').type('Doe');
      cy.get('[formcontrolname="username"]').type('johndoe');
      cy.get('[formcontrolname="password"]').type('MISO4208');

      cy.get('button.btn-primary').contains('Register').click();
      cy.contains('First Name is required').should('not.exist');
  });

  it('6. Hacer clic en el botón "Register" y verificar la existencia del mensaje de éxito en la creación del usuario.', () => {
      cy.visit('https://angular-6-registration-login-example.stackblitz.io/register');
      cy.contains('Run this project').click()

      cy.get('[formcontrolname="firstName"]').type('John');
      cy.get('[formcontrolname="lastName"]').type('Doe');
      cy.get('[formcontrolname="username"]').type('johndoe');
      cy.get('[formcontrolname="password"]').type('MISO4208');

      cy.get('button.btn-primary').contains('Register').click();
      cy.contains('Registration successful').should('exist');
  });


  it('7. Llenar los campos del formulario de inicio de sesión con las mismas credenciales.', () => {
      cy.visit('https://angular-6-registration-login-example.stackblitz.io/register');
      cy.contains('Run this project').click()


      cy.get('[formcontrolname="firstName"]').type('John');
      cy.get('[formcontrolname="lastName"]').type('Doe');
      cy.get('[formcontrolname="username"]').type('johndoe');
      cy.get('[formcontrolname="password"]').type('MISO4208');

      cy.get('button.btn-primary').contains('Register').click();
      cy.contains('Registration successful').should('exist');

      cy.get('button.btn-primary').contains('Login').click();
      cy.get('[formcontrolname="username"]').type('johndoe');
      cy.get('[formcontrolname="password"]').type('MISO4208');
  });


  it('8. Hacer clic en el botón "Login" y verificar la existencia del nombre de usuario en el listado de usuarios.', () => {
      cy.visit('https://angular-6-registration-login-example.stackblitz.io/register');
      cy.contains('Run this project').click()

      cy.get('[formcontrolname="firstName"]').type('John');
      cy.get('[formcontrolname="lastName"]').type('Doe');
      cy.get('[formcontrolname="username"]').type('johndoe');
      cy.get('[formcontrolname="password"]').type('MISO4208');

      cy.get('button.btn-primary').contains('Register').click();
      cy.contains('Registration successful').should('exist');

      cy.get('button.btn-primary').contains('Login').click();
      cy.get('[formcontrolname="username"]').type('johndoe');
      cy.get('[formcontrolname="password"]').type('MISO4208');

      cy.get('button.btn-primary').contains('Login').click();
      cy.contains('Hi John!').should('exist');
  });

});
