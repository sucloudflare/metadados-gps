
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

   <h2>Solução para Problemas - Se Travar na Análise de TCP</h2>
        <h3>Possíveis Causas</h3>
        <ul>
            <li><strong>Dispositivo Ativo com Resposta Lenta:</strong> O dispositivo (ex.: 192.168.10.100) pode estar ativo, mas respondendo lentamente devido a alta carga, firewall ativo ou configuração de portas que exige mais tempo para análise pelo Nmap.</li>
            <li><strong>Firewall ou Filtragem:</strong> Um firewall no dispositivo ou na rede pode estar bloqueando ou retardando as requisições, causando timeouts.</li>
            <li><strong>Portas em Estado Intermediário:</strong> Portas "filtered" ou "closed" podem exigir mais tentativas, aumentando o tempo de escaneamento.</li>
            <li><strong>Problema de Conexão:</strong> Instabilidade, latência ou perda de pacotes pode afetar apenas esse IP.</li>
            <li><strong>Configuração do Nmap:</strong> A varredura padrão (1-1024) pode não ser otimizada, causando atrasos.</li>
        </ul>
        <h3>Solução</h3>
        <ul>
            <li>Ajuste a função <code>get_tcp_info</code> no código para usar opções mais rápidas: <code>nm.scan(ip, '1-100', arguments='-T4 --max-retries 2')</code>.</li>
            <li>Teste manualmente com: <code>sudo nmap -p 1-1024 -T4 192.168.10.100</code>.</li>
            <li>Reinicie o escaneamento após ajustar.</li>
        </ul>
    </div>



  
  <h3>✉️ Contato</h3>
  <p>Se você tiver dúvidas, sugestões ou quiser contribuir, envie um e-mail ou abra uma issue!</p>
