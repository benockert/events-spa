#!/bin/bash

export MIX_ENV=prod
export PORT=4750

echo "Beginning deploy of events server..."

mix deps.get --only prod
mix compile

mix ecto.reset

mix release

echo "Deploy successful..."
echo "Run start.sh to start your server"
