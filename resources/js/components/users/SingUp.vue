<template>
    <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
                <v-toolbar color="red" dark flat>
                    <v-toolbar-title>Sing Up</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-form>
                        <v-text-field label="Name" name="name" type="text" />
                        <v-text-field label="Email" name="eamil" type="text" />
                        <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                        />
                        <v-text-field
                            id="password_confirmation"
                            label="Password Confirmation"
                            name="password_confirmation"
                            type="password"
                        />
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn color="red">sing up</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {};
</script>
