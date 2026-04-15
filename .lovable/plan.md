

## Plano: Estilizar a Página Inicial — Elevar o Visual

A página está funcional mas com visual muito básico em várias seções. O plano foca em tornar cada seção mais rica e premium, mantendo a identidade verde/dourada do site.

### Mudanças no `src/routes/index.tsx`

**1. Seção Diferenciais** — Atualmente são cards simples com borda fina e check. Vou:
- Adicionar fundo com gradiente sutil nos cards (bg-gradient)
- Ícone de check dentro de um círculo colorido (bg-primary/10 rounded-full)
- Sombra suave no hover com elevação
- Número decorativo (01, 02...) no canto superior
- Padding maior e tipografia mais expressiva

**2. Seção Processo** — Melhorar os steps:
- Cards com fundo branco/card e borda
- Números grandes com cor primary mais visível
- Linha conectora mais elegante entre steps

**3. Seção Produtos** — Tags muito simples. Vou:
- Aumentar padding, adicionar ícone de fruta decorativo
- Hover com fundo primary suave e transição mais rica
- Layout em grid ao invés de flex-wrap para melhor alinhamento

**4. Seção Parceiros** — Cards dos principais parceiros mais elaborados:
- Adicionar ícone/decoração no topo do card
- Gradiente sutil no hover
- Lista de parceiros menores com separadores visuais (dots)

**5. Seção Team Preview** — Adicionar:
- Linha decorativa acima do texto
- Background com gradiente sutil

**6. Seção SAS Preview** — Melhorar:
- Fundo com gradiente mais expressivo
- Borda decorativa ao redor do logo

### Resumo Técnico
- Arquivo editado: `src/routes/index.tsx`
- Apenas mudanças de CSS/classes Tailwind e pequenos ajustes de markup
- Sem novas dependências

