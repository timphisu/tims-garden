#!/bin/bash

# REPLACE THIS with the actual path to your Obsidian vault
VAULT_PATH="/home/timothy/Desktop/Tim's Garden" 
QUARTZ_CONTENT="./content"

# Sync and Rename Folders
# rsync -av --delete mirrors the source to the destination perfectly
rsync -av --delete "$VAULT_PATH/02 - Notes/" "$QUARTZ_CONTENT/01 - Notes/"
rsync -av --delete "$VAULT_PATH/03 - Encyclopedia/" "$QUARTZ_CONTENT/02 - Encyclopedia/"
rsync -av --delete "$VAULT_PATH/04 - Articles/" "$QUARTZ_CONTENT/03 - Articles/"
rsync -av --delete "$VAULT_PATH/Images/" "$QUARTZ_CONTENT/Images/"

echo "✅ Vault synced and folders renamed for Quartz!"
