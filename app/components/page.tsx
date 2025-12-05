import Button from "@/components/button";
import Card from "@/components/card";
import Counter from "@/components/counter";
import Input from "@/components/input";
import Select from "@/components/select";

export default function ComponentPage() {
  return (
    <div className="components-container">
      <h1>Componentes de la app</h1>
      <div className="component-section">
        <div className="component-group">
          <Button label="Buscar" variant="primary"></Button>
          <Button label="Buscar" variant="danger"></Button>
          <Button label="Buscar" variant="success"></Button>
          <Button label="Buscar" variant="alert"></Button>
        </div>
      </div>
      <div className="component-section">
        <div className="component-group">
          <Card
            title="Ejemplo de libro"
            description="Esta es una descripción de ejemplo para el libro."
            isbn="123-456-789"
          />
        </div>
      </div>
      <div className="component-section">
        <div className="component-group">
          <Counter count={0} />
        </div>
      </div>
      <div className="component-section">
        <div className="component-group">
          <Input />
        </div>
      </div>
      <div className="component-section">
        <div className="component-group">
          <Select options={[{label: "1", value: "1"}, {label: "2", value: "1"}, {label: "3", value: "1"}]}/>
        </div>
      </div>
    </div>
  );
}
