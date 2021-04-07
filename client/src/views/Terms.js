import React from "react";

const Terms = () => {
  return (
    <div className="terms">
      <h2></h2>
      <h3>Podmínky zapůjčení</h3>
      <ul>
        <li>vlastnit řidičský průkaz</li>
        <li>2 doklady totožnosti (ŘP a OP)</li>
        <li>nájemce starší 21let, ŘP musí vlastnit déle než 2roky</li>
        <li>u firem výpis z obchodního rejstříku</li>
        <li>
          trvalý pobyt nájemce nesmí být na ohlašovně obecního nebo městského
          úřadu
        </li>
      </ul>
      <ul>
        <li>
          denní limit najetých kilometrů u osobních automobilů je 300km/den nebo
          3500km/měsíc, nad tento limit se platí 2kč/km
        </li>
        <li>
          rezervace je vždy na určitou hodinu, v případě nevyzvednutí vozidla v
          danou dobu se rezervace stornuje
        </li>
        <li>
          rezervace je závazná, v případě nevyzvednutí vozidla apod., se účtuje
          storno poplatek ve výši pronájmu.
        </li>
        <li>
          výjezd osobních aut do zemí EU bez příplatku, platí pouze pro
          Slovensko, Polsko. Ostatní země EU dle dohody. Výjezd mimo ČR je nutno
          hlásit dopředu.
        </li>
        <li>
          nájemce hradí při podpisu smlouvy nájemné + vratnou kauci v hotovosti.
        </li>
        <li>všechny vozidla mají havarijní pojištění v rámci EU.</li>
        <li>
          vozidla se zapůjčují s prázdnou nádrží(rezerva) a v čistém stavu
        </li>
        <li>prodloužení pronájmu vozidla je možné po domluvě.</li>
        <li>
          v případě předčasného vrácení vozidla není pronajímatel povinen vrátit
          již zaplacené nájemné.
        </li>
        <li>
          kauce za vozidlo je orientační, její výše může byt odlíšná od ceníku,
          vždy záleží na dané situaci.
        </li>
        <li>předání/převzetí vozidel probíhá mezi 8:00 a 17:00</li>
        <li>vozidlo musí být vráceno ve stejném stavu jako bylo zapůjčeno.</li>
      </ul>
    </div>
  );
};

export default Terms;
