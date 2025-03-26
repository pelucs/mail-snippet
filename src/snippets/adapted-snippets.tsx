export const adaptedSnippets = [
  {
    title: "Tabela Mãe",
    category: "outlook",
    description: "Esta é a tabela principal (main table) de uma peça de e-mail HTML, usada para conter todo o conteúdo centralizado dentro de um limite de largura especificado.",
    htmlCode: `<!-- MAIN TABLE -->
<!--[if mso]> <center> <table style="width:600px;"> <tr> <td> <![endif]-->
<center>
  <table
    width="100%"
    align="center"
    role="presentation"
    style="border-spacing: 0; background-color: #FFF; 
    margin: 0 auto; padding: 0 0 12px 0; max-width: 600px; overflow: hidden;"
  >
    <tr>
      <td>
        ...
      </td>
    </tr>
  </table>
</center>
<!--[if mso]> </td> </tr> </table> </center> <![endif]-->
`
  },
  {
    title: "Background Image",
    category: "outlook",
    description: "Este é um card que possui Background Image adaptado para renderização em versões antigas do Outlook.",
    htmlCode: `<!-- CARD - BACKGROUND IMAGE -->
<td 
    valign="top"
    width="228" 
    height="361" 
    align="center" 
    class="no-mobile" 
    bgcolor="#4AB969"
    background="LINK DA SUA IMAGEM"
    style="background: url('LINK DA SUA IMAGEM') center / cover no-repeat #4AB969; 
    max-width: 100%; vertical-align: top; background-size: 100% 100%;"
>
    <!--[if gte mso 9]>
    <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:{VALOR EM pt}; height:{VALOR EM pt};">
    <v:fill type="tile" src="LINK DA SUA IMAGEM" color="#4AB969"/>
    <v:textbox inset="0,0,0,0">
    <![endif]-->
      ...
    <!--[if gte mso 9]>
    </v:textbox>
    </v:rect>
    <![endif]-->
</td>
`
  },
  {
    title: "Botão Arredondado",
    category: "outlook",
    description: "Este é um card que possui Background Image adaptado para renderização em versões antigas do Outlook.",
    htmlCode: `<!-- BOTÃO -->
<tr>
  <td style="background-color: #FFF; padding: 0 16px;">
    <center>
      <table>
        <tr>
          <td style="padding: 10px 5px; font-size: 18px; color: #FFF !important; text-align: center; ">
          <!--[if mso]>
          <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com🏢word" href="SEU LINK" style="height:45.0pt;width:172.5pt;v-text-anchor:middle;" arcsize="20%" stroke="false" fillcolor="#3598db">
          <w:anchorlock/>
          <v:textbox inset="0px,0px,0px,0px">
          <center dir="false" style="color:#FFF;font-size:18px">
          <![endif]-->
            <a 
              target="_blank"
              alias="botao"
              href="SEU LINK"
              style="background-color:#3598db; border-radius: 15px; color:#FFF; display:inline-block; mso-border-alt:none; padding: 20px 0;  
              width: 230px; text-decoration: none;"
            >
              Solicitar simulação
            </a>
          <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
          </td>
        </tr>
      </table>
    </center>
  </td>
</tr>
`
  },
]