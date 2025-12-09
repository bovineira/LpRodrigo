# Script para fazer push do código para o GitHub
# Execute este script após instalar o Git

Write-Host "=== Configurando repositório Git ===" -ForegroundColor Green

# Verificar se o Git está instalado
try {
    $gitVersion = git --version
    Write-Host "Git encontrado: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "ERRO: Git não está instalado ou não está no PATH" -ForegroundColor Red
    Write-Host "Por favor, instale o Git de: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
}

# Verificar se já é um repositório Git
if (Test-Path .git) {
    Write-Host "Repositório Git já inicializado" -ForegroundColor Yellow
} else {
    Write-Host "Inicializando repositório Git..." -ForegroundColor Cyan
    git init
}

# Verificar se o remote já existe
$remoteExists = git remote get-url origin 2>$null
if ($LASTEXITCODE -eq 0) {
    Write-Host "Remote 'origin' já configurado: $remoteExists" -ForegroundColor Yellow
    $update = Read-Host "Deseja atualizar o remote? (s/n)"
    if ($update -eq "s" -or $update -eq "S") {
        git remote set-url origin https://github.com/bovineira/LpRodrigo.git
        Write-Host "Remote atualizado!" -ForegroundColor Green
    }
} else {
    Write-Host "Adicionando remote 'origin'..." -ForegroundColor Cyan
    git remote add origin https://github.com/bovineira/LpRodrigo.git
}

# Adicionar todos os arquivos
Write-Host "`nAdicionando arquivos ao staging..." -ForegroundColor Cyan
git add .

# Verificar se há mudanças para commitar
$status = git status --porcelain
if ($status) {
    Write-Host "Fazendo commit das mudanças..." -ForegroundColor Cyan
    git commit -m "Initial commit: Landing Page Rodrigo Rocha Advogados"
} else {
    Write-Host "Nenhuma mudança para commitar" -ForegroundColor Yellow
}

# Renomear branch para main (se necessário)
Write-Host "`nConfigurando branch main..." -ForegroundColor Cyan
git branch -M main

# Fazer push
Write-Host "`nEnviando código para o GitHub..." -ForegroundColor Cyan
Write-Host "Você precisará fazer login no GitHub se ainda não estiver autenticado" -ForegroundColor Yellow
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n=== Push realizado com sucesso! ===" -ForegroundColor Green
    Write-Host "Repositório: https://github.com/bovineira/LpRodrigo" -ForegroundColor Cyan
} else {
    Write-Host "`n=== Erro ao fazer push ===" -ForegroundColor Red
    Write-Host "Verifique suas credenciais do GitHub" -ForegroundColor Yellow
}




