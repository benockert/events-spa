#!/bin/bash

export MIX_ENV=prod
export PORT=4750

_build/prod/rel/eventapp/bin/eventapp start
