import { useEffect, useState } from "react";

export default function CarParts() {
  const [allItems, setAllItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState(10);
  const [loading, setLoading] = useState(true);

  const URL =
    "https://api.jsonbin.io/v3/b/69e535e236566621a8ce210a";

  const API_KEY =
    "X-Access-Key: $2a$10$7L0fDBh3v77EF1usWl4EfOwXzcST0EFg9vISOOTUPBq7xcutgDBU2";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Access-Key":
              "$2a$10$7L0fDBh3v77EF1usWl4EfOwXzcST0EFg9vISOOTUPBq7xcutgDBU2",
          },
        });

        if (!res.ok) {
          throw new Error("Error HTTP: " + res.status);
        }

        const data = await res.json();

        console.log("RESPUESTA API:", data);

        // 🔥 AJUSTE CLAVE (JSONBin)
        const repuestos = data.record?.repuestos || [];

        setAllItems(repuestos);
      } catch (error) {
        console.error("Error cargando datos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 👉 mostrar solo 10 al inicio
  const itemsToShow = allItems.slice(0, visibleItems);

  const loadMore = () => {
    setVisibleItems((prev) => prev + 10);
  };

  if (loading) return <p>Cargando datos...</p>;

  return (
    <div>
      <h1>Repuestos de Carro</h1>

      {itemsToShow.length === 0 ? (
        <p>No hay repuestos disponibles</p>
      ) : (
        itemsToShow.map((item, index) => (
          <div key={index} style={{ border: "1px solid gray", margin: 10 }}>
            <h3>{item.nombre}</h3>
            <p>{item.descripcion}</p>
            <p>₡{item.precio}</p>
          </div>
        ))
      )}

      {/* 🔥 BOTÓN VER MÁS */}
      {visibleItems < allItems.length && (
        <button onClick={loadMore}>Ver más</button>
      )}
    </div>
  );
}