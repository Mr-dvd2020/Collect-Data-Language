import React, { useState } from "react";
import "./App.css";

function App() {
  const [spanishText, setSpanishText] = useState("");
  const [quechuaText, setQuechuaText] = useState("");
  const [audioFile, setAudioFile] = useState(null);
  const [audioPreview, setAudioPreview] = useState(null);

  // Manejar cambios en el campo de audio
  const handleAudioChange = (e) => {
    const file = e.target.files[0];
    setAudioFile(file);

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setAudioPreview(previewUrl); // Crear una URL para previsualizar
    }
  };

  // Función para manejar el envío de datos
  const handleSubmit = () => {
    alert(
      `Datos enviados:\nEspañol: ${spanishText}\nQuechua: ${quechuaText}\nAudio: ${
        audioFile ? audioFile.name : "No seleccionado"
      }`
    );
  };

  return (
    <div className="form-container">
      <h1>Formulario de Datos</h1>

      {/* Campo para texto en español */}
      <div className="form-group">
        <label>Texto en Español:</label>
        <input
          type="text"
          value={spanishText}
          onChange={(e) => setSpanishText(e.target.value)}
          placeholder="Ingrese texto en español"
        />
      </div>

      {/* Campo para texto en quechua */}
      <div className="form-group">
        <label>Texto en Quechua:</label>
        <input
          type="text"
          value={quechuaText}
          onChange={(e) => setQuechuaText(e.target.value)}
          placeholder="Ingrese texto en quechua"
        />
      </div>

      {/* Campo para subir audio */}
      <div className="form-group">
        <label>Subir Audio (MP3):</label>
        <input
          type="file"
          accept="audio/mp3, audio/ogg, audio/wav, audio/m4a, audio/mpeg"
          onChange={handleAudioChange}
        />

        {audioPreview && (
          <div className="audio-preview">
            <p>Previsualización:</p>
            <audio controls src={audioPreview}></audio>
          </div>
        )}
      </div>

      {/* Botón de envío */}
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
}

export default App;