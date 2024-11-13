import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonButton, IonInput, IonText } from '@ionic/react';
import './Home.css';
import { useState } from 'react';

const Home: React.FC = () => {
  const [todos, setTodo] = useState<string[]>([]);
  const [prenom, setPrenom] = useState<string>('');
  const [newTodoValue, setNewTodoValue] = useState<string>('');
  const [nom, setNom] = useState<string>('');

  const addTodo = () => {
    if (prenom.trim() === '' && nom.trim() === '') return;
    setTodo((todos) => [...todos, `${prenom} ${nom}`]);
    setPrenom('');
    setNom('');
  }

  const deleteTodo = (index: number) => {
    setTodo((todos) => todos.filter((_, i) => i !== index));
  }

  const updateTodo = (updateTodo: string, index: number) => {
    setTodo((todos) => todos.map((todo,i) => i === index ? newTodoValue : todo));
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ma todo list</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonInput 
          placeholder="Prenom"
          onIonChange={(e) => setPrenom(e.detail.value!)}
        />
        <IonInput
          placeholder="Nom"
          onIonChange={(e) => setNom(e.detail.value!)}
        />
        <IonButton onClick={addTodo}>Ajouter</IonButton>
        <IonList>
          {todos.map((todo,index) => (
            <IonItem>
              <IonInput
                placeholder={todo}
                onIonChange={(e) => setNewTodoValue(e.detail.value!)}
                />
                
              <IonButton slot="end" color="primary" onClick={() => updateTodo(todo, index)}>Modifier</IonButton>
              <IonButton slot="end" color="danger" onClick={() => deleteTodo(index)}>Supprimer</IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
