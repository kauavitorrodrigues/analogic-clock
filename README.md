# PORTUGUESE VERSION | Relógio Digital e Analógico

Este projeto consiste em um relógio digital e analógico implementado em HTML, CSS e JavaScript. Ele exibe a hora atual de forma digital e utiliza ponteiros para representar a hora, minuto e segundo em um relógio analógico.

## Estrutura do Projeto

### HTML (`index.html`)

O arquivo HTML contém a estrutura da página web e os elementos necessários para exibir o relógio.

- **Elementos Principais:**
  - `relogio`: Contém os elementos do relógio analógico.
  - `riscos`: Marcadores dos minutos no relógio analógico.
  - `ponteiros`: Elementos que representam os ponteiros do relógio.
  - `digital`: Área que exibe a hora digitalmente.
  
- **Autor:**
  - A informação do autor é exibida no rodapé, incluindo um link para o perfil do GitHub.

### CSS (`style.css`)

O arquivo CSS (`assets/style/style.css`) define a aparência visual dos elementos na página, incluindo o design do relógio analógico e a formatação do texto.

### JavaScript (`script.js`)

O arquivo JavaScript (`assets/js/script.js`) contém as funções responsáveis por atualizar a hora digital e posicionar os ponteiros do relógio analógico.

- **Elementos Manipulados:**
  - `digitalElement`: Display de horas digitais.
  - `sElement`, `mElement`, `hElement`: Ponteiros de segundos, minutos e horas do relógio analógico.

- **Funções Principais:**
  - `updateClock()`: Obtém a hora atual e atualiza tanto o display digital quanto os ponteiros analógicos.
  - `fixZero(time)`: Formata o número para garantir dois dígitos.

- **Atualização Automática:**
  - A função `setInterval` é utilizada para chamar `updateClock` a cada segundo, mantendo o relógio sempre atualizado.

## Como Usar

Basta abrir o arquivo `index.html` em um navegador web para visualizar o relógio digital e analógico. A hora será atualizada automaticamente a cada segundo.

## Autor

- [Kauã Vitor Rodrigues](https://github.com/kauavitorrodrigues)

## Contato

Para qualquer dúvida ou sugestão, entre em contato conosco:

- Email: [contato@example.com](kvrfz.prsnl@gmail.com)

---

# ENGLISH VERSION | Digital and Analog Clock

This project features a digital and analog clock implemented in HTML, CSS, and JavaScript. It displays the current time in digital format and utilizes clock hands to represent the hour, minute, and second in an analog clock.

## Project Structure

### HTML (`index.html`)

The HTML file contains the webpage structure and the necessary elements to display the clock.

- **Main Elements:**
  - `relogio`: Contains the elements of the analog clock.
  - `riscos`: Minute markers on the analog clock.
  - `ponteiros`: Elements representing the clock hands.
  - `digital`: Area displaying the time in digital format.
  
- **Author:**
  - Author information is displayed in the footer, including a link to the GitHub profile.

### CSS (`style.css`)

The CSS file (`assets/style/style.css`) defines the visual appearance of elements on the page, including the design of the analog clock and text formatting.

### JavaScript (`script.js`)

The JavaScript file (`assets/js/script.js`) contains functions responsible for updating the digital time and positioning the analog clock hands.

- **Manipulated Elements:**
  - `digitalElement`: Digital time display.
  - `sElement`, `mElement`, `hElement`: Second, minute, and hour hands of the analog clock.

- **Main Functions:**
  - `updateClock()`: Retrieves the current time and updates both the digital display and analog clock hands.
  - `fixZero(time)`: Formats the number to ensure two digits.

- **Automatic Update:**
  - The `setInterval` function is used to call `updateClock` every second, keeping the clock always up-to-date.

## How to Use

Simply open the `index.html` file in a web browser to view the digital and analog clock. The time will be automatically updated every second.

## Author

- [Kauã Vitor Rodrigues](https://github.com/kauavitorrodrigues)

## Contact

For any questions or suggestions, please contact us:

- Email: [kvrfz.prsnl@gmail.com](mailto:kvrfz.prsnl@gmail.com)