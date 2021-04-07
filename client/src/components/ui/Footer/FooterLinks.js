import React from "react";

const FooterLinks = () => {
  return (
    <div className="footer-links">
      <h3>MAPA</h3>
      <ul>
        <li>
          <a href="pobocka"> O nás</a>
        </li>
        <li>
          <a href="browse">Pronájem vozů</a>
        </li>
        <li>
          <a href="/podminky">Podmínky</a>
        </li>
        <li>
          <a href="/sluzby">Služby</a>
        </li>
        <li>
          <a href="/pobocka">Napište nám</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterLinks;
