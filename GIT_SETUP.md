# Instruções para conectar ao repositório GitHub

## Pré-requisitos
1. Instale o Git: https://git-scm.com/download/win
2. Após instalar, reinicie o terminal

## Comandos para enviar o código ao GitHub

```bash
# 1. Inicializar o repositório Git (se ainda não foi feito)
git init

# 2. Adicionar o repositório remoto
git remote add origin https://github.com/bovineira/LpRodrigo.git

# 3. Adicionar todos os arquivos
git add .

# 4. Fazer o commit inicial
git commit -m "Initial commit: Landing Page Rodrigo Rocha Advogados"

# 5. Renomear branch para main (se necessário)
git branch -M main

# 6. Enviar para o GitHub
git push -u origin main
```

## Se o repositório já tiver conteúdo

Se você quiser fazer pull primeiro (baixar conteúdo existente):

```bash
# 1. Adicionar o repositório remoto
git remote add origin https://github.com/bovineira/LpRodrigo.git

# 2. Fazer pull do conteúdo existente
git pull origin main --allow-unrelated-histories

# 3. Resolver conflitos se houver, depois:
git add .
git commit -m "Merge com repositório remoto"
git push -u origin main
```

## Nota
O repositório parece estar vazio, então você pode fazer o push diretamente sem precisar do pull.



