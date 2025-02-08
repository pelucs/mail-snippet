export const snippets = [
  {
    slug: "nav-bar",
    title: "Navbar",
    category: "header",
    reactCode: `<center><table align="center" role="presentation" style="width:600px;margin:0 auto;background-color:#FFFFFF;border-collapse:collapse;"><tbody><tr><td style="text-align:center;color:#FFFFFF;font-size:12px;background-color:#3498db;padding:10px 20px;"><a target="_blank" href="SEU LINK" style="color:#FFFFFF;text-decoration:none;text-align:center;">Nosso site</a></td><td style="text-align:center;color:#FFFFFF;font-size:12px;background-color:#3498db;padding:10px;">|</td><td style="text-align:center;color:#FFFFFF;font-size:12px;background-color:#3498db;padding:10px 20px;"><a target="_blank" href="SEU LINK" style="color:#FFFFFF;text-decoration:none;text-align:center;">Simulador</a></td><td style="text-align:center;color:#FFFFFF;font-size:12px;background-color:#3498db;padding:10px;">|</td><td style="text-align:center;color:#FFFFFF;font-size:12px;background-color:#3498db;padding:10px 20px;"><a target="_blank" href="SEU LINK" style="color:#FFFFFF;text-decoration:none;text-align:center;">Blog</a></td></tr></tbody></table></center>`,
    htmlCode: `<center>
  <table align="center" role="presentation" style="width:600px;margin:0 auto;background-color:#FFFFFF;border-collapse:collapse;">
    <tr>
      <td style="text-align:center;color:#FFFFFF;font-size:12px;background-color:#3498db;padding:10px 20px;"><a
          target="_blank" href="SEU LINK" style="color:#FFFFFF;text-decoration:none;text-align:center;">Nosso site</a>
      </td>

      <td style="text-align:center;color:#FFFFFF;font-size:12px;background-color:#3498db;padding:10px;">|</td>

      <td style="text-align:center;color:#FFFFFF;font-size:12px;background-color:#3498db;padding:10px 20px;"><a
          target="_blank" href="SEU LINK" style="color:#FFFFFF;text-decoration:none;text-align:center;">Simulador</a>
      </td>

      <td style="text-align:center;color:#FFFFFF;font-size:12px;background-color:#3498db;padding:10px;">|</td>

      <td style="text-align:center;color:#FFFFFF;font-size:12px;background-color:#3498db;padding:10px 20px;"><a
          target="_blank" href="SEU LINK" style="color:#FFFFFF;text-decoration:none;text-align:center;">Blog</a></td>
    </tr>
  </table>
</center>`,
  },
  {
    slug: "logo",
    title: "Logo",
    category: "header",
    reactCode: `<center><table align="center" role="presentation" style="width:600px; margin:0 auto; background-color:#FFFFFF;border-collapse:collapse;"><tbody><tr><td style="text-align: center; padding: 10px; color: #333333; font-size: 10px; background-color: #dde0e1;">Para visualizar no navegador <a href="%%view_email_url%%" style="color: #333333 !important; text-decoration: underline;">clique aqui</a></td></tr><tr><td style="text-align: center; padding: 32px 0px 28px 0px; background-color: #FFFFFF;"><a style="width: 100%;" alias="Logo-Mail-Snippet" href="SEU LINK" target="_blank"><img width="195" class="mob-reducing" alt="Logo MailSnippet" src="https://i.ibb.co/KqCkrgq/logotipo.png" style="margin: 0 auto;" /></a></td></tr></tbody></table></center>`,
    htmlCode: `<center>
  <table 
    align="center" 
    role="presentation"
    style="width:600px; margin:0 auto; background-color:#FFFFFF;border-collapse:collapse;"
  >
    <tr>
      <td style="text-align: center; padding: 10px; color: #333333; font-size: 10px; background-color: #dde0e1;">
        Para visualizar no navegador 
        <a 
          href="%%view_email_url%%" 
          style="color: #333333 !important; text-decoration: underline;">
          clique aqui
        </a>
      </td>
    </tr>

    <tr>
      <td style="text-align: center; padding: 32px 0px 28px 0px; background-color: #FFFFFF;">
        <a 
          style="width: 100%;"
          alias="Logo-Mail-Snippet" 
          href="SEU LINK" 
          target="_blank"
        >
          <img 
            width="195" 
            class="mob-reducing"
            alt="Logo MailSnippet" 
            src="https://i.ibb.co/KqCkrgq/logotipo.png" 
            style="margin: 0 auto;" 
          />
        </a>
      </td>
    </tr>
  </table>
</center>`,
  },
  {
    slug: "redes-sociais",
    title: "Redes Sociais",
    category: "footer",
    reactCode: `<center><table align="center" role="presentation" style="width:600px; margin:0 auto; background-color:#3498db;border-collapse:collapse;"><tbody><tr><td align="center" style="padding: 14px 0;"><table><tr><td style="padding-right: 30px;"><a href="Link1" title="Titulo" alias="Alias" conversion="false" data-linkto="https://"><img src="https://i.ibb.co/kDpgJLD/instagram.png" alt="Texto Alternativo" height="36" width="36" style="display: block; padding: 0px; text-align: right; height: 36px; width: 36px; border: 0px;"></a></td><td style="padding-right: 30px;"><a href="Link2" title="Titulo2" alias="Alias2" conversion="false" data-linkto="https://"><img src="https://i.ibb.co/wsFztL2/linkedin.png" alt="Texto Alternativo" height="36" width="36" style="display: block; padding: 0px; text-align: center; height: 36px; width: 36px; border: 0px;"></a></td><td><a href="Link3" title="Titulo3" alias="Alias3" conversion="false" data-linkto="https://"><img src="https://i.ibb.co/yX49yGF/email.png" alt="Texto Alternativo" height="36" width="36" style="display: block; padding: 0px; text-align: left; height: 36px; width: 36px; border: 0px;"></a></td></tr></table></td></tr></tbody></table></center>`,
    htmlCode: `<tr>
  <td align="center" style="padding: 14px 0;">
    <table>
      <tr>
        <td style="padding-right: 30px;"><a href="Link1" title="Titulo" alias="Alias" conversion="false"
            data-linkto="https://"><img src="https://i.ibb.co/kDpgJLD/instagram.png" alt="Texto Alternativo" height="36" width="36"
              style="display: block; padding: 0px; text-align: right; height: 36px; width: 36px; border: 0px;"></a>
        </td>
        <td style="padding-right: 30px;"><a href="Link2" title="Titulo2" alias="Alias2" conversion="false"
            data-linkto="https://"><img src="https://i.ibb.co/wsFztL2/linkedin.png" alt="Texto Alternativo" height="36" width="36"
              style="display: block; padding: 0px; text-align: center; height: 36px; width: 36px; border: 0px;"></a>
        </td>
        <td><a href="Link3" title="Titulo3" alias="Alias3" conversion="false" data-linkto="https://"><img
              src="https://i.ibb.co/yX49yGF/email.png" alt="Texto Alternativo" height="36" width="36"
              style="display: block; padding: 0px; text-align: left; height: 36px; width: 36px; border: 0px;"></a>
        </td>
      </tr>
    </table>
  </td>
</tr>`,
  },
  {
    slug: "links-uteis",
    title: "Links úteis",
    category: "footer",
    reactCode: `<center><table align="center" role="presentation" style="width:600px; margin:0 auto; background-color:#3498db;border-collapse:collapse;"><tbody><tr><td align="center" style="padding: 10px 0; height: 66px;"><table><tr><td style="color: #FFF; font-size: 10px; text-align: center; padding: 0 12px;"><a style="text-decoration: underline; color: #FFF; font-size: 10px;" href="%%unsub_center_url%%">Desinscrever-se</a></td><td style="color: #FFF; font-size: 10px; text-align: center; padding: 0 12px;"><a style="text-decoration: underline; color: #FFF; font-size: 10px;" href="Link1">Termos de Uso</a></td><td style="color: #FFF; font-size: 10px; text-align: center; padding: 0 12px;"><a style="text-decoration: underline; color: #FFF; font-size: 10px;" href="Link2">Política de Privacidade</a></td></tr></table></td></tr></tbody></table></center>`,
    htmlCode: `<tr>
  <td align="center" style="padding: 10px 0;">
    <table>
      <tr>
        <td style="color: #FFF; font-size: 10px; text-align: center; padding: 0 12px;">
          <a style="text-decoration: underline; color: #FFF; font-size: 10px;"
            href="%%unsub_center_url%%">Desinscrever-se</a>
        </td>
        <td style="color: #FFF; font-size: 10px; text-align: center; padding: 0 12px;">
          <a style="text-decoration: underline; color: #FFF; font-size: 10px;"
            href="Link1">Termos de Uso</a>
        </td>
        <td style="color: #FFF; font-size: 10px; text-align: center; padding: 0 12px;">
          <a style="text-decoration: underline; color: #FFF; font-size: 10px;"
            href="Link2">Política de
            Privacidade</a>
        </td>
      </tr>
    </table>
  </td>
</tr>`,
  }
];