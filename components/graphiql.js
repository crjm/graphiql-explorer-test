import { createGraphiQLFetcher } from '@graphiql/toolkit';
import { GraphiQL } from 'graphiql';
import React from 'react';
import ReactDOM from 'react-dom';
import { useExplorerPlugin } from '@graphiql/plugin-explorer';
import { useState } from 'react';

import 'graphiql/graphiql.css';
import '@graphiql/plugin-explorer/dist/style.css';

const fetcher = createGraphiQLFetcher({
  url: 'https://api.spacex.land/graphql/'
});

const GraphiQLComponent = () => {

  const [query, setQuery] = useState("");

  const explorerPlugin = useExplorerPlugin({
    query,
    onEdit: setQuery,
  });

    return <GraphiQL 
        fetcher={fetcher}
        query={query}
        onEditQuery={setQuery}
        plugins={[explorerPlugin]}
    />
}

export default GraphiQLComponent