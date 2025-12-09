@echo off
echo === Configurando repositorio Git ===
echo.

REM Verificar se o Git esta instalado
git --version >nul 2>&1
if errorlevel 1 (
    echo ERRO: Git nao esta instalado ou nao esta no PATH
    echo Por favor, instale o Git de: https://git-scm.com/download/win
    pause
    exit /b 1
)

echo Git encontrado!
echo.

REM Verificar se ja e um repositorio Git
if exist .git (
    echo Repositorio Git ja inicializado
) else (
    echo Inicializando repositorio Git...
    git init
)

REM Adicionar remote (ou atualizar se ja existir)
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo Adicionando remote 'origin'...
    git remote add origin https://github.com/bovineira/LpRodrigo.git
) else (
    echo Remote 'origin' ja configurado
    set /p update="Deseja atualizar o remote? (s/n): "
    if /i "%update%"=="s" (
        git remote set-url origin https://github.com/bovineira/LpRodrigo.git
        echo Remote atualizado!
    )
)

echo.
echo Adicionando arquivos ao staging...
git add .

echo.
echo Fazendo commit das mudancas...
git commit -m "Initial commit: Landing Page Rodrigo Rocha Advogados"

echo.
echo Configurando branch main...
git branch -M main

echo.
echo Enviando codigo para o GitHub...
echo Voce precisara fazer login no GitHub se ainda nao estiver autenticado
git push -u origin main

if errorlevel 1 (
    echo.
    echo === Erro ao fazer push ===
    echo Verifique suas credenciais do GitHub
) else (
    echo.
    echo === Push realizado com sucesso! ===
    echo Repositorio: https://github.com/bovineira/LpRodrigo
)

pause




