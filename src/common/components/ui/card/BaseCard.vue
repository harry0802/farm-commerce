<template>
    <Card>
        <CardHeader>
            <CardTitle>
                <slot name="Card-Title" />
            </CardTitle>
            <CardDescription>
                <slot name="Card-Description" />
            </CardDescription>
        </CardHeader>
        <CardContent>
            <slot name="Card-Content" />
        </CardContent>
        <CardFooter class="flex-col">
            <slot name="Card-Footer" />
        </CardFooter>
    </Card>
</template>

<script setup>
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/common/composables/ui/card'


</script>

<style scoped></style>
