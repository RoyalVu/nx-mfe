import { Badge, Button } from '@mfe-nx/ui';
import { BadgeCheck } from 'lucide-react';
import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <React.Suspense fallback={null}>
      <div className="flex flex-col mx-auto">
        <div className="flex justify-center items-center my-10">
          <Link to="/">Home</Link>
        </div>
        <Button>Get button from lib</Button>
      </div>
      <div className="flex flex-col mx-auto">
        <Badge className="gap-x-2 mx-auto" variant="secondary">
          <BadgeCheck />
          Check Icon
        </Badge>
      </div>
      <Routes>
        <Route
          element={
            <div className="flex justify-center items-center mx-auto my-10">
              <h1>Shell</h1>
            </div>
          }
          path="/"
        />
      </Routes>
    </React.Suspense>
  );
}

export default App;
