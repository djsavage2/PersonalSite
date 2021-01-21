<script lang="ts">
    let navItems = [
        { label: "Home", href: "#"}
    ];
</script>

<nav>
    <div class="inner">
        <ul>
            {#each navItems as item}
                <li>
                    <a href={item.href}>{item.label}</a>
                </li>
            {/each}
        </ul>
    </div>
</nav>

<style>
    nav {
        background-color: #881798
    }
</style>