const m_value = document.querySelector("#mvalue");
const exit = document.querySelector(".exit");

function convert() {
  if (m_value.length.value == 0) {
    exit.innerHTML = null;
    exit.innerHTML = "Erro. Por favor, informe um valor válido.";
  } else {
    exit.innerHTML = null;
    exit.innerHTML += `${Number(m_value.value)} metros correspondem a...`;

    const res_km = document.createElement("p");
    const km_val = document.createTextNode(
      `${Number(m_value.value / 1000)} quilômetros (Km);`
    );
    res_km.appendChild(km_val);
    exit.appendChild(res_km);

    const res_hm = document.createElement("p");
    const hm_val = document.createTextNode(
      `${Number(m_value.value / 100)} hectômetros (Hm);`
    );
    res_hm.appendChild(hm_val);
    exit.appendChild(res_hm);

    const res_dam = document.createElement("p");
    const dam_value = document.createTextNode(
      `${Number(m_value.value) / 10} decâmetros (Dam);`
    );
    res_dam.appendChild(dam_value);
    exit.appendChild(res_dam);

    const res_dm = document.createElement("p");
    const dm_value = document.createTextNode(
      `${Number(m_value.value) * 10} decímetros (dm);`
    );
    res_dm.appendChild(dm_value);
    exit.appendChild(res_dm);

    const res_cm = document.createElement("p");
    const cm_value = document.createTextNode(
      `${Number(m_value.value) * 100} centímetros (cm);`
    );
    res_cm.appendChild(cm_value);
    exit.appendChild(res_cm);

    const res_mm = document.createElement("p");
    const mm_value = document.createTextNode(
      `${Number(m_value.value) * 100} milímetros (mm).`
    );
    res_mm.appendChild(mm_value);
    exit.appendChild(res_mm);
  }
}
