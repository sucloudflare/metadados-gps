
<h1>📸 Leitor de Imagens com Localização no Mapa</h1>

  <p>Este projeto é um site simples que permite aos usuários <strong>enviar imagens</strong> tiradas com <strong>GPS ativado</strong> e visualizar a <strong>localização no mapa</strong> usando os dados de metadados EXIF embutidos nas fotos.</p>

  <h2>🌍 Funcionalidade</h2>
  <ul>
    <li>Carregamento de uma ou mais imagens (JPG, JPEG, PNG).</li>
    <li>Leitura dos metadados EXIF para identificar latitude e longitude.</li>
    <li>Exibição da imagem e do ponto no mapa onde ela foi tirada.</li>
    <li>Avisos sobre quando os metadados estão ausentes (ex: imagens salvas de redes sociais).</li>
  </ul>

  <h2>🛠 Tecnologias Utilizadas</h2>
  <ul>
    <li><strong>HTML5 / CSS3</strong>: Estrutura e estilo da página.</li>
    <li><strong>JavaScript (Vanilla)</strong>: Manipulação dos arquivos e lógica do mapa.</li>
    <li><a href="https://github.com/exif-js/exif-js" target="_blank"><strong>EXIF.js</strong></a>: Biblioteca para ler dados EXIF de imagens.</li>
    <li><a href="https://leafletjs.com/" target="_blank"><strong>Leaflet.js</strong></a>: Biblioteca de mapas interativos.</li>
  </ul>

  <h2>🧑‍🏫 Como usar</h2>
  <ol>
    <li>Acesse o site localmente ou publicado.</li>
    <li>Clique em <strong>"Selecionar Imagens"</strong> e escolha uma ou mais fotos com GPS ativado.</li>
    <li>As imagens serão carregadas abaixo com marcadores no mapa.</li>
    <li>Se o mapa não mostrar a localização, a imagem pode não conter dados GPS.</li>
  </ol>

  <blockquote>📌 <strong>Dica importante:</strong> Envie as fotos originais, diretamente do celular. Imagens enviadas por redes sociais (como WhatsApp na galeria, Instagram, Facebook) geralmente têm os metadados removidos.</blockquote>

  <h2>⚠️ Sobre envio de fotos</h2>
  <ul>
    <li>✅ Envie as imagens por <strong>e-mail</strong> como anexo.</li>
    <li>✅ Ou envie como <strong>documento no WhatsApp</strong>.</li>
    <li>❌ Evite enviar pela <strong>galeria do WhatsApp</strong>, pois os dados de localização podem ser removidos.</li>
  </ul>

  <h2>📁 Organização dos arquivos</h2>
  <pre><code>leitor-exif-com-mapa/
├── index.html        # Página principal
├── styles.css        # Estilos visuais
├── script.js         # Lógica JavaScript
├── README.md         # Documentação do projeto
└── /assets           # (Opcional) Pasta de imagens e ícones
</code></pre>

  <h2>📸 Exemplo</h2>
  <p><em>Exemplo de uma imagem com localização marcada no mapa:</em></p>
  <img src="exemplo-captura.png" alt="Exemplo de localização da foto no mapa">

  <h2>✅ Licença</h2>
  <p>Este projeto está sob a licença <strong>MIT</strong>. Sinta-se à vontade para modificar e usar!</p>

  <hr />

  <h3>✉️ Contato</h3>
  <p>Se você tiver dúvidas, sugestões ou quiser contribuir, envie um e-mail ou abra uma issue!</p>
